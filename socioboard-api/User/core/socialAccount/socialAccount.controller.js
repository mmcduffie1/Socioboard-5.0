import SocialAccountService from './socialAccount.service.js';

class SocialAccountController {
  /**
   * TODO To get the redirect Url and state for specified network
   * Route get the Redirect Url
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   * @return {object} Returns redirect Url and state
   */
  async getProfileRedirectUrl(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
               #swagger.description = To get profile redirectUrl for specified Network */
    /* #swagger.security = [{
               "AccessToken": []
        }] */
    /*	#swagger.parameters['teamId'] = {
            in: 'query',
            required:true
        }
            #swagger.parameters['network'] = {
                in: 'query',
                default: 'Facebook',
            enum: ["Facebook", "FacebookPage","FacebookGroup", "Twitter", "LinkedIn", "LinkedInCompany", "Youtube", "GoogleAnalytics", "Instagram","InstagramBusiness" ,"Pinterest"]

        } */
    return await SocialAccountService.getProfileRedirectUrl(req, res, next);
  }

  /**
   * TODO To add the specified network
   * Add the specified network
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   * @return {object} Returns Added specified network details
   */
  async addSocialProfile(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
                 #swagger.description = Add the social network to the System */
    /* #swagger.security = [{
               "AccessToken": []
        }] */
    /*	#swagger.parameters['state'] = {
                in: 'query',
                required:false
                }
            #swagger.parameters['code'] = {
                in: 'query'
                } 
            #swagger.parameters['flag'] = {
                in: 'query',
                default:0,
                enum: ["1", "0"]
            } 
            */
    return await SocialAccountService.addSocialProfile(req, res, next);
  }
  async getYoutubeChannels(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
                 #swagger.description = To get Youtube Channel details*/
    /* #swagger.security = [{
                    "AccessToken": []
                    }] */
    /*	
         #swagger.parameters['code'] = {
                in: 'query'

            } */
    return await SocialAccountService.getYoutubeChannels(req, res, next);
  }
  async getFacebookPages(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
                 #swagger.description = get the FaceBook Pages*/
    /* #swagger.security = [{
                    "AccessToken": []
                    }] */
    /*	
          #swagger.parameters['code'] = {
                 in: 'query'
 
             } */
    return await SocialAccountService.getFacebookPages(req, res, next);
  }
  async getOwnFacebookGroups(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
                 #swagger.description = get the FaceBook Groups*/
    /* #swagger.security = [{
                    "AccessToken": []
                    }] */
    /*	
          #swagger.parameters['code'] = {
                 in: 'query'
 
             } */
    return await SocialAccountService.getOwnFacebookGroups(req, res, next);
  }
  async getLinkedInCompanyProfileDetails(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
                 #swagger.description = Add the Linked in Profile*/
    /* #swagger.security = [{
                    "AccessToken": []
                    }] */
    /*	
          #swagger.parameters['code'] = {
                 in: 'query'
 
             } */
    return await SocialAccountService.getLinkedInCompanyProfileDetails(
      req,
      res,
      next
    );
  }

  async addBulkSocialProfiles(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
         #swagger.description = 'add Bulk social Profiles' */
    /* #swagger.security = [{
               "AccessToken": []
        }] */
    /*	#swagger.parameters['data'] = {
                in: 'body',
                required: true,
                schema: { $ref: "#/definitions/addBulk" }
        } */
    /*	
           #swagger.parameters['teamId'] = {
                  in: 'query'
              } */
    return await SocialAccountService.addBulkSocialProfiles(req, res, next);
  }

  async deleteSocialProfile(req, res, next) {
    /* 	#swagger.tags = ['Add-SocialAccount']
         #swagger.description = 'Delete Socila Profile' */
    /* #swagger.security = [{
               "AccessToken": []
        }] */

    /*#swagger.parameters['AccId'] = {
                  in: 'query'
              } */
    return await SocialAccountService.deleteSocialProfile(req, res, next);
  }
}
export default new SocialAccountController();
