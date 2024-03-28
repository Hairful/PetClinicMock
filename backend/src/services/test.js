//已完成测试的函数：getAllUsers,addNewUser,updateUser,deleteUser,getItemDetail

/** 
 //（1）
const { getAllUsers } = require('./adminUser');

// 定义一个异步函数来调用 getAllUsers，并且使用 await 等待结果解析
async function testGetAllUsers() {
    try {
        const result = await getAllUsers();
        console.log(result); // 打印函数结果
    } catch (error) {
        console.error('Error in testGetAllUsers:', error);
    }
}
//  *调用异步函数
testGetAllUsers();


//(2)
const { addNewUser } = require('./adminUser');

// 定义一个异步函数来调用 addNewUser，并且使用 await 等待结果解析
async function testAddNewUser() {
    try {
        // 模拟要添加的新用户信息
        const userName = 'newUser';
        const password = 'password123';
        const isAdmin = false;

        // 调用添加用户函数
        const result = await addNewUser(userName, password, isAdmin);

        // 打印函数结果
        console.log(result);
    } catch (error) {
        console.error('Error in testAddNewUser:', error);
    }
}

// 调用异步函数
testAddNewUser();


//(3)
const { updateUser } = require('./adminUser');

// 定义一个异步函数来测试 updateUser，并且使用 await 等待结果解析
async function testUpdateUser() {
    try {
        // 模拟要更新的用户信息
        const userID = 1; // 假设存在 ID 为 1 的用户
        const newUserName = 'updatedUserName';
        const newPassword = 'updatedPassword123';
        const newIsAdmin = true;

        // 调用 updateUser 函数
        const result = await updateUser(userID, newUserName, newPassword, newIsAdmin);

        // 检查返回结果是否符合预期
        console.log(result);
        // 进一步添加期望结果的断言
    } catch (error) {
        console.error('Error in testUpdateUser:', error);
    }
}

// 调用异步函数进行测试
testUpdateUser();

//(4)
const { deleteUser } = require('./adminUser');

// 定义一个异步函数来测试 deleteUser，并且使用 await 等待结果解析
async function testDeleteUser() {
    try {
        // 模拟要删除的用户的userID
        const userID = 1; // 假设存在 ID 为 1 的用户

        // 调用 deleteUser 函数
        const result = await deleteUser(userID);

        // 检查返回结果是否符合预期
        console.log(result);
        // 进一步添加期望结果的断言
    } catch (error) {
        console.error('Error in testDeleteUser:', error);
    }
}

// 调用异步函数进行测试
testDeleteUser();

//(5)
const { getItemDetail } = require('./3DVirtualTour');

// 定义一个异步函数来调用 getItemDetail，并且使用 await 等待结果解析
async function testGetItemDetail() {
    try {
        // 假设要测试的 itemID 为 1
        const itemID = 1;
        const result = await getItemDetail(itemID);
        console.log(result); // 打印函数结果
    } catch (error) {
        console.error('Error in testGetItemDetail:', error);
    }
}

// 调用异步函数
testGetItemDetail();

//(6)
const { getDepartmentList } = require('./3DVirtualTour');

// 定义一个异步函数来调用 getDepartmentList，并且使用 await 等待结果解析
async function testGetDepartmentList() {
    try {
        const result = await getDepartmentList();
        console.log(result); // 打印函数结果
    } catch (error) {
        console.error('Error in testGetDepartmentList:', error);
    }
}

// 调用异步函数
testGetDepartmentList();

//(7)
const { getDepartmentDetail } = require('./3DVirtualTour');

// 定义一个异步函数来调用 getDepartmentDetail，并且使用 await 等待结果解析
async function testGetDepartmentDetail() {
    try {
        // 假设要测试的 departmentID 为 1
        const departmentID = 1;
        const result = await getDepartmentDetail(departmentID);
        console.log(result); // 打印函数结果
    } catch (error) {
        console.error('Error in testGetDepartmentDetail:', error);
    }
}

// 调用异步函数
testGetDepartmentDetail();

//(8)
const { updateItemInfo } = require('./3DVirtualTour');

// 定义一个异步函数来调用 updateItemInfo，并且使用 await 等待结果解析
async function testUpdateItemInfo() {
    try {
        // 假设要测试的 itemID、itemName 和 itemIntro 分别为 1、"手术刀" 和 "手术刀不大不小"
        const itemID = 1;
        const itemName = "手术刀";
        const itemIntro = "手术刀不大不小";

        // 调用 updateItemInfo 函数
        const result = await updateItemInfo(itemID, itemName, itemIntro);
        console.log(result); // 打印函数结果
    } catch (error) {
        console.error('Error in testUpdateItemInfo:', error);
    }
}


// 调用异步函数
testUpdateItemInfo();


//(9)
const { updateDepartmentInfo } = require('./3DVirtualTour');

// 定义一个异步函数来调用 updateDepartmentInfo，并且使用 await 等待结果解析
async function testUpdateDepartmentInfo() {
    try {
        // 假设要修改的科室ID为 1，修改后的科室名称和简介分别为 "手术室" 和 "手术室不大不小"
        const departmentID = 1;
        const departmentName = "手术室";
        const departmentIntro = "手术室不大不小";

        // 调用更新函数
        const result = await updateDepartmentInfo(departmentID, departmentName, departmentIntro);
        
        // 打印结果
        console.log(result);
    } catch (error) {
        console.error('Error in testUpdateDepartmentInfo:', error);
    }
}

// 调用异步函数进行测试
testUpdateDepartmentInfo();
*/


