/**
* 直播client后台 
* 直播client后台接口文档-前缀/liveadmin/v1/**
*/
import { request } from './request';
export default class Api {
  
    /** 
    * 添加数据收集
    * @method post
    * @name Api添加数据收集
    */
    addActivityDataCollectUsingPOST(data){
      return request({
        url:'/activity/data/add',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取活动收集数据
    * @method post
    * @name Api获取活动收集数据
    */
    getActivityDataCollectUserInfoListUsingPOST(data){
      return request({
        url:'/activity/data/get/data',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 根据id获取收集信息
    * @method post
    * @name Api根据id获取收集信息
    */
    getActivityDataCollectByIdUsingPOST(data){
      return request({
        url:'/activity/data/get/id',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取活动列表
    * @method post
    * @name Api获取活动列表
    */
    getActivityDataCollectListUsingPOST(data){
      return request({
        url:'/activity/data/get/list',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新数据收集
    * @method post
    * @name Api更新数据收集
    */
    updateActivityDataCollectUsingPOST(data){
      return request({
        url:'/activity/data/update',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 添加万能印章
    * @method post
    * @name Api添加万能印章
    */
    addBBOmnipotentUsingPOST(data){
      return request({
        url:'/addBBOmnipotent',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 添加你画我猜词
    * @method post
    * @name Api添加你画我猜词
    */
    addDrawWordsUsingPOST(data){
      return request({
        url:'/addDrawWords',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量添加你画我猜词
    * @method post
    * @name Api批量添加你画我猜词
    */
    addDrawWordsBatchUsingPOST(data){
      return request({
        url:'/addDrawWordsBatch',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 发放头像框
    * @method post
    * @name Api发放头像框
    */
    addFrameToUserUsingPOST(data){
      return request({
        url:'/addFrameToUser',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 添加沙漏
    * @method post
    * @name Api添加沙漏
    */
    addSandClockUsingPOST(data){
      return request({
        url:'/addSandClock',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增快捷发言
    * @method post
    * @name Api新增快捷发言
    */
    addShortMsgUsingPOST(data){
      return request({
        url:'/addShortMsg',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 添加谁是卧底词
    * @method post
    * @name Api添加谁是卧底词
    */
    addSpyWordsUsingPOST(data){
      return request({
        url:'/addSpyWords',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量添加谁是卧底词
    * @method post
    * @name Api批量添加谁是卧底词
    */
    addSpyWordsBatchUsingPOST(data){
      return request({
        url:'/addSpyWordsBatch',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 增加话题
    * @method post
    * @name Api增加话题
    */
    addTagInfoUsingPOST(data){
      return request({
        url:'/addTagInfo',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 用户加金币
    * @method post
    * @name Api用户加金币
    */
    addUserScoreUsingPOST(data){
      return request({
        url:'/addUserScore',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 添加礼券白名单
    * @method post
    * @name Api添加礼券白名单
    */
    addWhiteUserUsingPOST(data){
      return request({
        url:'/addWhiteUser',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 后台获取游戏盒子开关列表
    * @method post
    * @name Api后台获取游戏盒子开关列表
    */
    adminGetGameBoxConfigUsingPOST(data){
      return request({
        url:'/adminGetGameBoxConfig',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 后台获取游戏盒子开关列表-new
    * @method post
    * @name Api后台获取游戏盒子开关列表-new
    */
    adminGetGameBoxConfigNewUsingPOST(data){
      return request({
        url:'/adminGetGameBoxConfigNew',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 后台更新游戏盒子配置开关
    * @method post
    * @name Api后台更新游戏盒子配置开关
    */
    adminUpdateGameBoxSwitchUsingPOST(data){
      return request({
        url:'/adminUpdateGameBoxSwitch',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 后台更新游戏盒子配置开关-new
    * @method post
    * @name Api后台更新游戏盒子配置开关-new
    */
    adminUpdateGameBoxSwitchNewUsingPOST(data){
      return request({
        url:'/adminUpdateGameBoxSwitchNew',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量上传
    * @method post
    * @name Api批量上传
    */
    dataImportUsingPOST(data){
      return request({
        url:'/appDraw/dataImport',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除词汇
    * @method post
    * @name Api删除词汇
    */
    delWordUsingPOST(data){
      return request({
        url:'/appDraw/delWord',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取词汇列表
    * @method post
    * @name Api获取词汇列表
    */
    getWordListUsingPOST(data){
      return request({
        url:'/appDraw/getWordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 发放勋章
    * @method post
    * @name Api发放勋章
    */
    addUsingPOST(data){
      return request({
        url:'/awardMedal',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量发放扭蛋券
    * @method post
    * @name Api批量发放扭蛋券
    */
    batchAddBlindBoxTicketUsingPOST(data){
      return request({
        url:'/batchAddBlindBoxTicket',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量发放坐骑
    * @method post
    * @name Api批量发放坐骑
    */
    batchAddCarUsingPOST(data){
      return request({
        url:'/batchAddCar',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量发放宝箱券
    * @method post
    * @name Api批量发放宝箱券
    */
    batchAddKingboxTicketUsingPOST(data){
      return request({
        url:'/batchAddKingboxTicket',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 批量发放刮奖券
    * @method post
    * @name Api批量发放刮奖券
    */
    batchAddScratchCardUsingPOST(data){
      return request({
        url:'/batchAddScratchCard',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 创建/更新背景墙信息
    * @method post
    * @name Api创建/更新背景墙信息
    */
    bgCreateUsingPOST(data){
      return request({
        url:'/bgCreate',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除背景墙信息
    * @method post
    * @name Api删除背景墙信息
    */
    bgDeleteUsingPOST(data){
      return request({
        url:'/bgDelete',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取用户背景墙配置信息
    * @method post
    * @name Api获取用户背景墙配置信息
    */
    bgUserListUsingPOST(data){
      return request({
        url:'/bgUserList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 发放用户背景墙
    * @method post
    * @name Api发放用户背景墙
    */
    bgUserSendUsingPOST(data){
      return request({
        url:'/bgUserSend',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 取消推荐
    * @method post
    * @name Api取消推荐
    */
    cancelRecommendUsingPOST(data){
      return request({
        url:'/cancelRecommend',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 修改公告
    * @method post
    * @name Api修改公告
    */
    changeNoticeUsingPOST(data){
      return request({
        url:'/changeNotice',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除活动配置
    * @method post
    * @name Api删除活动配置
    */
    delActivityConfigUsingPOST(data){
      return request({
        url:'/delActivityConfig',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除公告背景
    * @method post
    * @name Api删除公告背景
    */
    updateNoticeBackgroundUsingPOST(data){
      return request({
        url:'/delNoticeBackground',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除快捷发言
    * @method post
    * @name Api删除快捷发言
    */
    delShortMsgUsingPOST(data){
      return request({
        url:'/delShortMsg',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除礼券白名单
    * @method post
    * @name Api删除礼券白名单
    */
    delWhiteUserUsingPOST(data){
      return request({
        url:'/delWhiteUser',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 发送广播
    * @method post
    * @name Api发送广播
    */
    deleteBroadcastUsingPOST(data){
      return request({
        url:'/deleteBroadcast',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除坐骑
    * @method post
    * @name Api删除坐骑
    */
    deleteCarUsingPOST(data){
      return request({
        url:'/deleteCar',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除你画我猜词
    * @method post
    * @name Api删除你画我猜词
    */
    deleteDrawWordsUsingPOST(data){
      return request({
        url:'/deleteDrawWords',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 删除谁是卧底词
    * @method post
    * @name Api删除谁是卧底词
    */
    deleteSpyWordsUsingPOST(data){
      return request({
        url:'/deleteSpyWords',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取坐骑列表
    * @method post
    * @name Api获取坐骑列表
    */
    getALLCarListUsingPOST(data){
      return request({
        url:'/getALLCarList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 用户账户查询
    * @method post
    * @name Api用户账户查询
    */
    getAccountByUidUsingPOST(data){
      return request({
        url:'/getAccountByUid',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取活动配置列表
    * @method post
    * @name Api分页获取活动配置列表
    */
    getActivityConfigListUsingPOST(data){
      return request({
        url:'/getActivityConfigList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取首页直播推荐列表
    * @method post
    * @name Api获取首页直播推荐列表
    */
    LiveRecommendControllerUsingPOST(data){
      return request({
        url:'/getAllLiveRecommendList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取扭蛋券后台发放列表
    * @method post
    * @name Api获取扭蛋券后台发放列表
    */
    getBBRecordListUsingPOST(data){
      return request({
        url:'/getBBRecordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取banner列表
    * @method post
    * @name Api分页获取banner列表
    */
    getBannerListUsingPOST(data){
      return request({
        url:'/getBannerList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取背景墙配置信息
    * @method post
    * @name Api获取背景墙配置信息
    */
    getBgConfigListUsingPOST(data){
      return request({
        url:'/getBgConfigList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取广播列表
    * @method post
    * @name Api获取广播列表
    */
    getBroadCastListUsingPOST(data){
      return request({
        url:'/getBroadCastList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取坐骑
    * @method post
    * @name Api获取坐骑
    */
    getCarByNameUsingPOST(data){
      return request({
        url:'/getCarByName',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取坐骑列表
    * @method post
    * @name Api获取坐骑列表
    */
    getCarListUsingPOST(data){
      return request({
        url:'/getCarList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取坐骑发放列表
    * @method post
    * @name Api获取坐骑发放列表
    */
    getCarRecordListUsingPOST(data){
      return request({
        url:'/getCarRecordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取打包下载资源
    * @method post
    * @name Api获取打包下载资源
    */
    getCarSourceUsingPOST(data){
      return request({
        url:'/getCarSource',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取你画我猜图片列表
    * @method post
    * @name Api获取你画我猜图片列表
    */
    getDrawRecordUsingPOST(data){
      return request({
        url:'/getDrawRecord',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 从词获取你画我猜图片
    * @method post
    * @name Api从词获取你画我猜图片
    */
    getDrawRecordByWordsUsingPOST(data){
      return request({
        url:'/getDrawRecordByWords',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 从词id获取你画我猜图片
    * @method post
    * @name Api从词id获取你画我猜图片
    */
    getDrawRecordByWordsIdUsingPOST(data){
      return request({
        url:'/getDrawRecordByWordsId',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取你画我猜图片统计列表
    * @method post
    * @name Api获取你画我猜图片统计列表
    */
    getDrawRecordCountUsingPOST(data){
      return request({
        url:'/getDrawRecordCount',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取你画我猜词汇列表
    * @method post
    * @name Api获取你画我猜词汇列表
    */
    getDrawWordsListUsingPOST(data){
      return request({
        url:'/getDrawWordsList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 根据用户id意见反馈记录
    * @method post
    * @name Api根据用户id意见反馈记录
    */
    getFeedbackByIDUsingPOST(data){
      return request({
        url:'/getFeedbackByID',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取意见反馈记录
    * @method post
    * @name Api获取意见反馈记录
    */
    getFeedbackListUsingPOST(data){
      return request({
        url:'/getFeedbackList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取头像框列表
    * @method post
    * @name Api获取头像框列表
    */
    getFrameListUsingPOST(data){
      return request({
        url:'/getFrameList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取头像框发放列表
    * @method post
    * @name Api获取头像框发放列表
    */
    getFrameRecordListUsingPOST(data){
      return request({
        url:'/getFrameRecordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取礼包列表
    * @method post
    * @name Api获取礼包列表
    */
    getGiftPackListUsingPOST(data){
      return request({
        url:'/getGiftPackList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取icon跳转游戏类型列表
    * @method post
    * @name Api获取icon跳转游戏类型列表
    */
    getIconGameTypeListUsingPOST(data){
      return request({
        url:'/getIconGameTypeList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取icon列表
    * @method post
    * @name Api分页获取icon列表
    */
    getIconListUsingPOST(data){
      return request({
        url:'/getIconList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取开屏配置列表
    * @method post
    * @name Api分页获取开屏配置列表
    */
    getInitDisplayListUsingPOST(data){
      return request({
        url:'/getInitDisplayList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取勋章是否发放过
    * @method post
    * @name Api获取勋章是否发放过
    */
    getIsHaveBeforeUsingPOST(data){
      return request({
        url:'/getIsHaveBefore',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取宝箱券后台发放列表
    * @method post
    * @name Api获取宝箱券后台发放列表
    */
    getKBAddRecordListUsingPOST(data){
      return request({
        url:'/getKBAddRecordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取主播回放列表
    * @method post
    * @name Api获取主播回放列表
    */
    getLiveRecordListUsingPOST(data){
      return request({
        url:'/getLiveRecordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取公告背景列表
    * @method post
    * @name Api分页获取公告背景列表
    */
    getNoticeBackgroundListUsingPOST(data){
      return request({
        url:'/getNoticeBackgroundList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取公告列表
    * @method post
    * @name Api获取公告列表
    */
    getNoticeListUsingPOST(data){
      return request({
        url:'/getNoticeList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取万能印章发放列表
    * @method post
    * @name Api获取万能印章发放列表
    */
    getOmnipotentListUsingPOST(data){
      return request({
        url:'/getOmnipotentList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取人工推荐
    * @method post
    * @name Api获取人工推荐
    */
    getRecommendUsingPOST(data){
      return request({
        url:'/getRecommend',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取刮奖券后台发放列表
    * @method post
    * @name Api获取刮奖券后台发放列表
    */
    getSCRecordListUsingPOST(data){
      return request({
        url:'/getSCRecordList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取沙漏后台发放列表
    * @method post
    * @name Api获取沙漏后台发放列表
    */
    getSandClockRecordUsingPOST(data){
      return request({
        url:'/getSandClockRecord',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取金币添加记录
    * @method post
    * @name Api获取金币添加记录
    */
    getScoreRecordUsingPOST(data){
      return request({
        url:'/getScoreRecord',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 用户金币记录查询
    * @method post
    * @name Api用户金币记录查询
    */
    getScoreRecordByArgsUsingPOST(data){
      return request({
        url:'/getScoreRecordByArgs',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取快捷发言列表
    * @method post
    * @name Api分页获取快捷发言列表
    */
    getShortMsgListUsingPOST(data){
      return request({
        url:'/getShortMsgList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取卧底词汇列表
    * @method post
    * @name Api获取卧底词汇列表
    */
    getSpyWordsListUsingPOST(data){
      return request({
        url:'/getSpyWordsList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 分页获取话题列表
    * @method post
    * @name Api分页获取话题列表
    */
    getTagInfoListUsingPOST(data){
      return request({
        url:'/getTagInfoList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取用户昵称
    * @method post
    * @name Api获取用户昵称
    */
    getUserNameUsingPOST(data){
      return request({
        url:'/getUserName',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取用户金币余额
    * @method post
    * @name Api获取用户金币余额
    */
    getUserScoreUsingPOST(data){
      return request({
        url:'/getUserScore',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取礼券白名单
    * @method post
    * @name Api获取礼券白名单
    */
    getWhiteUserListUsingPOST(data){
      return request({
        url:'/getWhiteUserList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 审核意见反馈
    * @method post
    * @name Api审核意见反馈
    */
    handleFeedbackUsingPOST(data){
      return request({
        url:'/handleFeedback',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 添加勋章
    * @method post
    * @name Api添加勋章
    */
    addUsingPOST_1(data){
      return request({
        url:'/honorMedal/add',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取用户昵称
    * @method post
    * @name Api获取用户昵称
    */
    getUserNameUsingPOST_1(data){
      return request({
        url:'/honorMedal/getUserName',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取荣耀勋章列表
    * @method post
    * @name Api获取荣耀勋章列表
    */
    listUsingPOST(data){
      return request({
        url:'/honorMedal/list',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 查所有勋章list
    * @method post
    * @name Api查所有勋章list
    */
    listAllUsingPOST(data){
      return request({
        url:'/honorMedal/listAll',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 修改勋章
    * @method post
    * @name Api修改勋章
    */
    modifyUsingPOST(data){
      return request({
        url:'/honorMedal/modify',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 修改状态
    * @method post
    * @name Api修改状态
    */
    modifyStatusUsingPOST(data){
      return request({
        url:'/honorMedal/modifyStatus',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取版本配置信息
    * @method post
    * @name Api获取版本配置信息
    */
    liveVersionConfigListUsingPOST(data){
      return request({
        url:'/liveVersionConfigList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取荣耀勋章发放列表
    * @method post
    * @name Api获取荣耀勋章发放列表
    */
    listUsingPOST_1(data){
      return request({
        url:'/medalUserList',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 修改礼包
    * @method post
    * @name Api修改礼包
    */
    modifyGiftPackUsingPOST(data){
      return request({
        url:'/modifyGiftPack',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 修改礼包状态
    * @method post
    * @name Api修改礼包状态
    */
    modifyGiftPackStatusUsingPOST(data){
      return request({
        url:'/modifyGiftPackStatus',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 下线活动配置
    * @method post
    * @name Api下线活动配置
    */
    offActivityConfigUsingPOST(data){
      return request({
        url:'/offActivityConfig',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 保存人工推荐
    * @method post
    * @name Api保存人工推荐
    */
    recommendRoomUsingPOST(data){
      return request({
        url:'/recommend',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 发送广播
    * @method post
    * @name Api发送广播
    */
    sendBroadCastUsingPOST(data){
      return request({
        url:'/sendBroadCast',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 设置封面
    * @method post
    * @name Api设置封面
    */
    setCoverUsingPOST(data){
      return request({
        url:'/setCover',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 获取游客模式开关
    * @method get
    * @name Api获取游客模式开关
    */
    getSwitchUsingGET(data){
      return request({
        url:'/tourist/getSwitch',
        method: 'get',
        data: data
      })
    }
  
    /** 
    * 更改游客模式开关
    * @method post
    * @name Api更改游客模式开关
    */
    modifySwitchUsingPOST(data){
      return request({
        url:'/tourist/modifySwitch',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增/编辑活动配置
    * @method post
    * @name Api新增/编辑活动配置
    */
    updateActivityConfigUsingPOST(data){
      return request({
        url:'/updateActivityConfig',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增/编辑Banner
    * @method post
    * @name Api新增/编辑Banner
    */
    updateBannerUsingPOST(data){
      return request({
        url:'/updateBanner',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新banner状态
    * @method post
    * @name Api更新banner状态
    */
    updateBannerStatusUsingPOST(data){
      return request({
        url:'/updateBannerStatus',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增或更新坐骑
    * @method post
    * @name Api新增或更新坐骑
    */
    updateCarUsingPOST(data){
      return request({
        url:'/updateCar',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新你画我猜图片记录
    * @method post
    * @name Api更新你画我猜图片记录
    */
    updateDrawRecordUsingPOST(data){
      return request({
        url:'/updateDrawRecord',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增或更新头像框
    * @method post
    * @name Api新增或更新头像框
    */
    updateFrameUsingPOST(data){
      return request({
        url:'/updateFrame',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增/编辑icon
    * @method post
    * @name Api新增/编辑icon
    */
    updateIconUsingPOST(data){
      return request({
        url:'/updateIcon',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新icon状态
    * @method post
    * @name Api更新icon状态
    */
    updateIconStatusUsingPOST(data){
      return request({
        url:'/updateIconStatus',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增/编辑开屏
    * @method post
    * @name Api新增/编辑开屏
    */
    updateInitDisplayUsingPOST(data){
      return request({
        url:'/updateInitDisplay',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新版本配置
    * @method post
    * @name Api更新版本配置
    */
    updateLiveVersionConfigUsingPOST(data){
      return request({
        url:'/updateLiveVersionConfig',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 新增/编辑公告背景
    * @method post
    * @name Api新增/编辑公告背景
    */
    updateNoticeBackgroundUsingPOST_1(data){
      return request({
        url:'/updateNoticeBackground',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新版本配置状态
    * @method post
    * @name Api更新版本配置状态
    */
    updateStatusUsingPOST(data){
      return request({
        url:'/updateStatus',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新话题状态
    * @method post
    * @name Api更新话题状态
    */
    updateTagStatusUsingPOST(data){
      return request({
        url:'/updateTagStatus',
        method: 'post',
        data: data
      })
    }
  
    /** 
    * 更新开屏状态
    * @method post
    * @name Api更新开屏状态
    */
    updatedisplayStatusUsingPOST(data){
      return request({
        url:'/updatedisplayStatus',
        method: 'post',
        data: data
      })
    }
  
}