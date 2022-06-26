#!/bin/bash

# 下载Release内容，并解压
cd ~
mkdir -p tmp
cd tmp
wget https://fastgit.org/zzxzzk115/BBKGames_GameShell/releases/latest/download/BBK_Games.zip
unzip BBK_Games.zip

# 安装
cd ~/tmp/BBK_Games
sudo chmod +x install.sh
bash install.sh

# 删除临时内容
sudo rm -rf ~/tmp/BBK_Games*

# 提示安装完成
echo Done!