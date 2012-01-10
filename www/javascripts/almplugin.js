/**
 * ALM PhoneGap plugin
 * Copyright (c) 2011 Act Local, LLC
 *
 */
var ALMPlugin = function () {
  this.ALMSharableURL = 0;
  this.ALMSharableEvent = 1;
  this.ALMSharableImage = 2;
};

ALMPlugin.prototype.launchMoviePlayer = function(url)
{
  return PhoneGap.exec("ALMPlugin.launchMoviePlayer", url);
};

ALMPlugin.prototype.navControllerNavigate = function(pageUrl, withActionButton)
{
    return PhoneGap.exec("ALMPlugin.navControllerNavigate", pageUrl, withActionButton);
};


ALMPlugin.prototype.setPushNotificationsEnabled = function(enabled)
{
    return PhoneGap.exec("ALMPlugin.setPushNotificationsEnabled", enabled);
};

ALMPlugin.prototype.setupSharableContent = function(contentType, url, title, unixtime, location, additionalInfo, detailPath)
{
    return PhoneGap.exec("ALMPlugin.setupSharableContent", contentType, url, title, unixtime,location,additionalInfo, detailPath);
};

ALMPlugin.prototype.deleteSavedForDetail = function(detailPath)
{
    return PhoneGap.exec("ALMPlugin.deleteSavedForDetail", detailPath);
};

PhoneGap.addConstructor(function() 
{
	if(!window.plugins)
	{
		window.plugins = {};
	}
	window.plugins.almPlugin = new ALMPlugin();
});