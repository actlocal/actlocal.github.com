
// Adds a $.getQueryParam function to jQuery
(function($) {
  $.getQueryParam = function(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);

    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));

  };
})(jQuery);



var ALMMiscUtils = {};

// takes an object and a list of fields that should be url decoded, returns the modified object
ALMMiscUtils.decodeUrisIn = function()
{
  if (arguments.length == 0) 
  {
    return undefined;  
  }
  var obj = arguments[0];
  for (var i = 1; i < arguments.length; i++)
  {
    try { 
      if ((obj[arguments[i]] !== undefined) && (obj[arguments[i]] != null))
        obj[arguments[i]] = decodeURIComponent(obj[arguments[i]].replace(/\+/g, " "));
    } catch(err) {
      ;
    }
  }
  
  return obj;
  
};


// based on http://geekswithblogs.net/Nettuce/archive/2010/03/03/javascript-twitter-linkify.aspx
ALMMiscUtils.linkify = function(text) {
    text = text || "";
    text = text.replace(/(https?:\/\/\S+)/gi, function (s) {
        return '<a href="' + s + '">' + s + '</a>';
    });

    text = text.replace(/(^|)@(\w+)/gi, function (s) {
        return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
    });

    text = text.replace(/(^|)#(\w+)/gi, function (s) {
        return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
     });
    return text;
};


// based on http://ejohn.org/blog/javascript-pretty-date/
ALMMiscUtils.prettyDate = function(unixTimestamp)
{
	diff = (((new Date()).getTime() - (unixTimestamp*1000)) / 1000),
	day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 3600 )
		return;
			
	return day_diff == 0 && (
		diff < 60 && "just now" ||
		diff < 120 && "1 minute ago" ||
		diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
		diff < 7200 && "1 hour ago" ||
		diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago" ||
		day_diff < 360 && Math.ceil(day_diff / 30) + " months ago" || 
		day_diff < 3600 && Math.ceil(day_diff / 360) + " years ago";
    
};


ALMMiscUtils.is_running_on_ios = function()
{
  if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('iPod')))
  {
    return true;
  }
  
  return false;
};


ALMMiscUtils.is_running_on_android = function()
{
  if (navigator.userAgent.indexOf("Android") != -1)
  {
    return true;
  }

  return false;
};

