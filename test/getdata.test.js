var getdata = require('./getdata.js');
var expect = require('chai').expect;

var arr='导师：张三\n2016级博士生：天一、王二、吴五\n2015级硕士生：李四、王五、许六\n2016级硕士生：刘一、李二、李三\n2017级本科生：刘六、琪七、司四\n\n刘六：JAVA、数学建模\n\n李二：字节跳动、京东云';
describe('处理大块数据的测试', function() {
  it('只上传一个大块的情况', function() {
    expect(getdata(arr)).to.be.equal(1);
  });
});