// general configuration
var mongoose = require('mongoose');
var config = {
  db_host: 'localhost',
  db_name: 'TEST',
  db_collection: 'MEPS-TEST6',
  db_debug: 1,
  api_url: 'http://www.epnewshub.eu/feederfrontendapi/contributors/1?limit=8000&offset=0',
  app_title:       'TweetYourMEP',
  app_description: '',
  app_author:      'SOD Collaborative hacking',
    // Define Mep model
  schema: new mongoose.Schema({
    mep_country : String,
    mep_emailAddress : String,
    mep_epFotoUrl : String,
    mep_epPageUrl : String,
    mep_facebookId : String,
    mep_facebookPageUrl : String,
    mep_faction : String,
    mep_firstName : String,
    mep_lastName : String,
    mep_fullName : String,
    mep_localParty : String,
    mep_personalWebsite : String,
    mep_twitterUrl : String,
    mep_userId : String,
    mep_additionalProperties : String,
    mep_itemCount : String,
    mep_twitterUserName: String,
  }, {
    autoIndex : true
  }),
  countries: {"AT":"Austria","BE":"Belgium","BG":"Bulgaria","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},
  factionNames: {
          LD: "Group of the Alliance of Liberals and Democrats for Europe",
          CR: "European Conservatives and Reformists Group",
          FD: "Europe of Freedom and Democracy Group",
          PP: "Group of the European People's Party (Christian Democrats)",
          UL: "Confederal Group of the European United Left - Nordic Green Left",
          GF: "Group of the Greens/European Free Alliance",
          NA: "Non-attached Members",
          SD: "Group of the Progressive Alliance of Socialists and Democrats in the European Parliament"
  },
}
module.exports = config;