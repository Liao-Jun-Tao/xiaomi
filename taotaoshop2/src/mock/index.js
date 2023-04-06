import Mock from 'mockjs';

import swiperList from './data/swiperList';
import subnav from './data/subnav';
import hotsell from './data/hotsell';
import goods from './data/goods';
import category from './data/category';


Mock.setup({
  timeout: '50 - 1000' //随机的延迟时间,  模式请求耗时
});

//录播图  url  /swiperList

Mock.mock(/\/swiperList/, 'get', () => {
  return {
    code: 0,
    result: swiperList
  };
});

Mock.mock(/\/subnav/, 'get', () => {
  return {
    code: 0,
    result: subnav
  };
});

Mock.mock(/\/hotsell/, 'get', () => {
  return {
    code: 0,
    result: hotsell
  };
});

Mock.mock(/\/goods/, 'get', () => {
  return {
    code: 0,
    result: goods
  };
});

Mock.mock(/\/category/, 'get', () => {
  return {
    code: 0,
    result: category
  };
});

Mock.mock(/\/login/, 'post', (options) => {
  console.log(options);
  const { body } = options;
  const { userName, userPwd } = JSON.parse(body);
  console.log(userName, userPwd);

  if (userName == '13576729952' && userPwd == 'ljt123') {
    return {
      code: 0,
      status: 200,
      token: 'ljtzzzzzzs',
      msg: '登录成功'
    }
  } else {
    return {
      code: 1,
      status: 402,
      msg: '账号或密码有误 '
    }
  }
});
