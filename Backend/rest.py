from flask import Flask, request, jsonify
from matchmaker import Matchmaker
from generate import users
import os

app = Flask(__name__)
matchmaker = Matchmaker(users, "matchmaking_model.pth")

@app.route('/match', methods=['POST'])
def match():
    user = request.json['user']
    matched_users = matchmaker.graph_matchmaking(user)
    print(matched_users)
    return jsonify(matched_users)

@app.route('/feedback', methods=['POST'])
def feedback():
    user = request.json['user']
    matched_user = request.json['matched_user']
    feedback_score = request.json['feedback_score']
    matchmaker.collect_feedback(user, matched_user, feedback_score)
    matchmaker.adjust_weights()
    return jsonify({'status': 'success'})

@app.route('/addUser', methods=['POST'])
def add_user():
    user = request.json['user']
    gender = request.json['gender']
    age = int(request.json['age'])
    interests = request.json['interests']
    ageGroupPreference = request.json['ageGroupPreference']
    genderPreference = request.json['genderPreference']

    if user not in users.keys():
        print("This is the user: ", str(user))
        users[user] = {'gender': gender, 'age': age, 'genderPreference': genderPreference, 'interests': interests, 'vacationType': 'History', 'hotel': 'Hotel 50', 'ageGroupPreference': ageGroupPreference, 'userID': user}
        # Change the working directory to the Backend directory
        os.chdir(os.path.dirname(os.path.abspath(__file__)))
        outFile = open("generate.py","w")
        outFile.write("users = %s" % (str(users)))
        outFile.close()
        matchmaker.add_user_and_update_graph(user)
        return jsonify({'status': 'success'})
    else:
        print("This user id is alr taken! Try another")
        return jsonify({'status': '404'})

if __name__ == '__main__':
    matchmaker.build_graph()
    app.run(debug=True)
