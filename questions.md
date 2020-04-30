1. I spent about 2 days on this assignment. I would add error handling, sanitization of user input, a more robust search (toggleable advanced search by field) and probably enhance the UI. I would also manage state better and use functions for the components so that I could use react hooks. 

2. there weren't many new features added in the most recent React release. A useful existing feature I used was the forceUpdate() function that allows you to
force a rerendering of components. This wouldn't have been needed if I used hooks as those automatically rerender the components but as I didn't, using: self.forceUpdate() 
was very useful.

3. If the performance issue popped up recently I would look into a recent release to see if changes there could affect performance. I would also try to isolate outside factors 
such as devices encountering the issue (is it browser specific, does it have to do with older devices). I would inspect logs to see if there are errors.

4. One improvement I would make is the option to limit the fields returned. In our use case there were many unneeded fields provided that added overhead. Another would be a having redundancies in case the api goes down. 

5. {
    "firstName": "Harman",
    "lastName": "Bajwa",
    "gender": "Male",
    "employer": "TCS",
    "role": "software Dev",
    "favouriteSport": "basketball",
    "favouriteTeam":  "Toronto Raptors"
}