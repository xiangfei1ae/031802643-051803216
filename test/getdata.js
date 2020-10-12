function getdata(text) {
    var treeData=[];
    //var text = $("#text").val(); //获取id为text的textarea的全部内容
    var eachblock = text.split("\n\n\n");//针对多组数据输入的情况，以“\n\n\n"为关键字进行分组，调用split函数进行分割
    for (var k = 0; k < eachblock.length; k++) { //eachblock.length用于得到分组的数量
        var smallblock=eachblock[k].split("\n\n");//将大组中导师、学生信息与学生经历分开
        var arry = smallblock[0].split("\n");//针对每一组数据，以“\n"为关键字进行分组，得到每条导师和学生的信息
        var length=smallblock.length-1;//学生经历的数量
        //处理不同学生的经历
        var messages=[];
        for(var i=1;i<=length;i++){
        var newarr=smallblock[i].split("：");//将不同学生经历以“：”为关键字进行分组,得到名字和经历
        var student={};
        student.name=newarr[0];
        student.experience=newarr[1];
        messages.push(student);
        }
        var teacher = {
                name: '',
                children: []
            }

        for (var p = 0; p < arry.length; p++) {
            var newarr = arry[p].split("：");//针对每条导师和学生的信息，以“：”为关键字进行分组，可得到身份标签和身份信息
            var type = [];
            var type1 = [];
            var type2 = [];
            var a1 = newarr[0]; //获取身份标签，如导师、2016级博士生等，保存在a1变量
            if (p != 0) {
                type1.name = a1;
            }
            var a2 = newarr[1];//获取身份信息，如天一、王二、吴五等，保存在a2变量
            var a3 = a2.split("、");//针对每组身份信息，以“、”为关键字进行切分，得到每个人的名字信息
            for (var j = 0; j < a3.length; j++) { //a3.length用于得到每条身份信息里名字的数量

                var student = [];
                if (p == 0) {
                    teacher.name = a3[j];
                }
                if (p != 0) {
                    student.name = a3[j];
                    //遍历messags 寻找是否有相对应的学生经历
                    for(var i=0;i<length;i++){
                    if(a3[j]==messages[i].name){
                    student.children=[{name:messages[i].experience}];
                    }
                    }
                    type.push(student);

                }
            }
            if (p != 0) {
                type1.children = type;
                teacher.children.push(type1);
            }
        }

        treeData[k] = [];
        treeData[k] = teacher;
    }
    return treeData.length;
}
module.exports = getdata;