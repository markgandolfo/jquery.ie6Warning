### IE6Warning Error Message

This jquery plugin when bound to a div, will show that div to users with ie6 browsers only. 
The div is clickable, which will result in a cookie being set advising the user has understood the message, which will not show again for 20 days. 

Simple Enough? 

##### You'll need

[jQuery](http://www.jquery.com/)<br />
[Cookie](http://plugins.jquery.com/project/Cookie) by Klaus Hartl/klaus.hartl@stilbuero.de 

#### How to use

Simply,<br />
Create a div, that'll show a message 

    <style>
        #ie6Message {
            width: 100%;
            height: 20px;
            border-bottom: 1px solid #929384;
            font: 1em/1.5 Arial, sans-serif;
            text-decoration: none;
            background: url('img/attention_ie6_shield.gif') top left no-repeat #fffee6;
        }

        #ie6Message#cross {
	        padding: 2px 0 0 10px;
        }
    </style>
<br />
    <div id="ie6Message" style="display: none">
        <img src="/img/common/attention_ie6_shield.gif" id="cross"/>
        We recognise your browser (Internet Explorer 6) is outdated, we recommend you update to a later version
        <a id="ie6MessageCloseButton" href="#"><img src="/img/common/attention_ie6_close.gif" id="shield" /></a>
    </div>
<br />
<br />
Then bind IE6Warning to the div. <br />
<br />
    $(document).ready(function() {<br />
        $('#ie6Message').ie6warning();<br />
    });<br />
<br />
And done. <br />
<br />
##### Credits
Really, this is released under MIT. do what you want with it.. <br />
[markgandolfo.com.au](http://markgandolfo.com.au) is where you can hear from me (not so regularly) or stalk me on [twitter:markgandolfo](http://twitter.com/markgandolfo)
