Explanation:
Trying to share our presentation card or profile card between webpages using Iframe HTML tag,
we can share or customize the details of our card.

How to use:
ºDeploy the index.html file and the css,javascript folders in a hosting service, (no server needed),
ºadd the tag iframe and send encoded params in the request URL of the src atribute.
<iframe src="https://yourdomain.com/
?name=especifyYourName(Encoded)
&profession=especifyYourProfession(Encoded)
&services=especifyYourServices(Encoded)
&content=especifyYourContent(Encoded)
&profile=ProfileImageFromUrl(Encoded)
&background=BackgroundImageFromURL(Encoded)
">

Check this example:
<iframe 
width="400"
height="600" 
src="http://localhost:3000/
?profile=https://free-images.com/sm/a312/man_serious_senior_portrait.jpg
&background=https://free-images.com/md/da3b/lake_minnewanka_11092005.jpg
&content=Senior%20software%20developers%20are%20responsible%20for%20designing,%20testing,%20and%20implementing%20new%20and%20updated%20software%20programs.%20They%20take%20on%20a%20managerial%20role%20and%20lead%20the%20development%20team%20with%20all%20software%20development%20tasks.%20Their%20job%20is%20to%20ensure%20all%20projects%20are%20completed%20on%20time%20and%20to%20company%20specifications.&name=Derek%20J.%20Payton
&services=Software%20Developer,%20Consoultant,%20Entrepreneur.
&profession=Software%20Engineer%20Principal" id="a"></iframe>

How to test the application?
ºUsing node from comand line start the file "node_server.js"
ºUsing node from comand line start the file "selenium_test.js"


Requirements:
For running the selenium tests you have the next:
-Dependency "selenium-webdriver": "^4.1.2"
-Chrome version 101.0.4951.41

For run local node server.
-Have free the port 3000.
-No dependencies needed.




Jose Pablo Martinez Macias
Information Technology Consultant