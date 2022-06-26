#!/bin/bash

# 获取当前文件目录
CUR_DIR=$(cd $(dirname $0);pwd)

# 把所有shell文件赋予可执行权限
find $CUR_DIR/ -name "*.sh" | xargs chmod +x

# 拷贝Menu文件夹到~/apps
sudo cp -r $CUR_DIR/Menu ~/apps