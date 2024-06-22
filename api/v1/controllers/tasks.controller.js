const Task = require("../model/tasks.model");
const paginationHelper = require("../../../helper/pagination");
const searchHelper = require("../../../helper/search");

// [GET] /api/v1/tasks
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  const objectSearch = searchHelper(req.query);

  if (req.query.keyword) {
    find.title = objectSearch.regex;
  }

  // phần phân trang
  const countTasks = await Task.countDocuments(find); // đếm tổng số sản phẩm
  let objectPagination = paginationHelper(
    {
      limitItem: 2, // sl phần tử mỗi trang
      currentPage: 1,
    },
    req.query,
    countTasks
  );
  // end phần phân trang

  // sort
  const sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  }
  // end sort
  const tasks = await Task.find(find)
    .sort(sort)
    .limit(objectPagination.limitItem)
    .skip(objectPagination.skip);
  res.json(tasks);
};

// [GET] /api/v1/tasks/detail/:id
module.exports.detail = async (req, res) => {
  try {
    const id = req.params.id;

    const task = await Task.findOne({
      _id: id,
      deleted: false,
    });

    res.json(task);
  } catch (error) {
    res.json("Khong tim thay");
  }
};

// [PATCH] /api/v1/tasks/change-status/:id
module.exports.changeStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const status = req.body.status;
    // console.log(req.body);
    await Task.updateOne(
      {
        _id: id,
      },
      {
        status: status,
      }
    );
    res.json({
      code: 200,
      message: "Cập nhật trạng thái thành công!!",
    });
  } catch (error) {
    res.json({
      code: 404,
      message: "Không tồn tại!!",
    });
  }
};
