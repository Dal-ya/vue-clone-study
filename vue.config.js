// development(개발 모드), production(배포 모드) 분기를 주어 번들링
module.exports = {
  // 환경 변수들은 process.env 객체에 정의되어 있다.
  // NODE_ENV -> 앱이 실행되는 모드 3개의 기본 모드가 있다. ("development", "production", "test")
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
};
