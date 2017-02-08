var githubhook = require('githubhook');
var request=require('request');

var github = githubhook({ path: '/payload',port:10011});

github.listen();

var event, repo, ref, data;
userName="umar2code"
event="pull_request";
repoName="devsite";
ref="master";


var requestData={
  "name": "web",
  "active": true,
  "events": [
    "pull_request"
  ],
  "config": {
    "url": "http://13.88.191.34:10011/payload",
    "content_type": "json"
  }
}

var options = {
        method: "POST",
        url:'https://api.github.com/repos/'+userName+'/'+repoName+'/hooks?access_token=5334130453e671d8df2c3430f1293a6fc648714b',
        
       headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent':'umar2code'
        },
        json: requestData
        //{"image": "tutum/hello-world", "name": "f1", "target_num_containers": 1}
        
          };
     
request(options, function (error, response, body) {

if (error) {
        console.log(error);
    } else {
        console.log(body);
     }
   
    
});








github.on('*', function (event, repoName, ref, data) {
    console.log('triggred pull_request');
    console.log(data);
});