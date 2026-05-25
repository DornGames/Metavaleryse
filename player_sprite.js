/* ====== 俯视玩家精灵（2.5 头身纤细男性，灰色衣服，深灰蓝裤子，大耳朵，短发，4 帧行走动画） ====== */
function createPlayerSprite() {
    const W = 32;
    const H = 64;
    const sprites = {};

    // 颜色定义
    const skinL   = '#f0d8c0';
    const skinM   = '#e0c0a0';
    const skinD   = '#d0a880';
    const skinDD  = '#c09060';
    const hairL   = '#4a3a28';
    const hairM   = '#3a2a18';
    const hairD   = '#2a1a08';
    const earC    = '#e8b890';
    const shirtM  = '#7a8a9a';
    const shirtL  = '#8a9aaa';
    const shirtD  = '#6a7a8a';
    const sleeveEdge = '#5a7a9a';
    const pantsM  = '#3a4a5a';
    const pantsD  = '#2a3a4a';
    const pantsL  = '#4a5a6a';
    const shoesM  = '#4a3a2a';
    const shoesD  = '#3a2a1a';
    const badgeY  = '#f0c040';
    const badgeO  = '#f09040';
    const mouthC  = '#c07060';
    const whiteC  = '#ffffff';
    const blackC  = '#1a1a1a';

    function shadow(cx) {
        cx.fillStyle = 'rgba(0,0,0,0.12)';
        cx.beginPath();
        cx.ellipse(16, 58, 8, 3, 0, 0, Math.PI * 2);
        cx.fill();
    }

    for (const dir of ['DOWN', 'UP', 'LEFT', 'RIGHT']) {
        for (let frame = 0; frame < 4; frame++) {
            const c = document.createElement('canvas');
            c.width = W;
            c.height = H;
            const cx = c.getContext('2d');

            const ox = 2;
            const oy = 6;
            const legOffset = frame === 1 ? 2 : (frame === 3 ? -2 : 0);

            shadow(cx);

            if (dir === 'DOWN') {
                // 头发（2.5 头身，头部约 12px 高）
                cx.fillStyle = hairM;
                cx.fillRect(ox + 6, oy, 16, 3);
                cx.fillRect(ox + 4, oy + 2, 20, 4);
                cx.fillStyle = hairL;
                cx.fillRect(ox + 8, oy + 1, 12, 2);
                cx.fillStyle = hairD;
                cx.fillRect(ox + 4, oy + 5, 20, 2);

                // 耳朵（大耳朵，贴近头部）
                cx.fillStyle = earC;
                cx.fillRect(ox + 3, oy + 6, 6, 8);
                cx.fillRect(ox + 19, oy + 6, 6, 8);
                cx.fillStyle = skinDD;
                cx.fillRect(ox + 4, oy + 7, 4, 6);
                cx.fillRect(ox + 20, oy + 7, 4, 6);

                // 脸部（纤细）
                cx.fillStyle = skinM;
                cx.fillRect(ox + 6, oy + 6, 16, 10);
                cx.fillStyle = skinL;
                cx.fillRect(ox + 8, oy + 6, 12, 5);
                cx.fillStyle = skinD;
                cx.fillRect(ox + 6, oy + 14, 16, 2);

                // 眼睛
                cx.fillStyle = whiteC;
                cx.fillRect(ox + 8, oy + 9, 4, 4);
                cx.fillRect(ox + 16, oy + 9, 4, 4);
                cx.fillStyle = blackC;
                cx.fillRect(ox + 10, oy + 10, 2, 2);
                cx.fillRect(ox + 18, oy + 10, 2, 2);

                // 嘴巴
                cx.fillStyle = mouthC;
                cx.fillRect(ox + 13, oy + 14, 3, 2);

                // 脖子
                cx.fillStyle = skinD;
                cx.fillRect(ox + 12, oy + 16, 5, 3);

                // 身体（纤细，18px 宽）
                cx.fillStyle = shirtL;
                cx.fillRect(ox + 9, oy + 18, 10, 2);
                cx.fillStyle = shirtD;
                cx.fillRect(ox + 9, oy + 18, 10, 1);

                cx.fillStyle = shirtM;
                cx.fillRect(ox + 5, oy + 20, 18, 14);
                cx.fillStyle = shirtD;
                cx.fillRect(ox + 14, oy + 20, 9, 14);
                cx.fillStyle = shirtL;
                cx.fillRect(ox + 9, oy + 20, 5, 2);

                // 徽章
                cx.fillStyle = badgeY;
                cx.fillRect(ox + 7, oy + 22, 3, 3);
                cx.fillStyle = badgeO;
                cx.fillRect(ox + 8, oy + 23, 2, 2);

                // 手臂（纤细）
                cx.fillStyle = shirtM;
                cx.fillRect(ox + 1, oy + 20, 4, 8);
                cx.fillRect(ox + 23, oy + 20, 4, 8);
                cx.fillStyle = sleeveEdge;
                cx.fillRect(ox + 1, oy + 27, 4, 2);
                cx.fillRect(ox + 23, oy + 27, 4, 2);
                cx.fillStyle = skinM;
                cx.fillRect(ox + 1, oy + 29, 4, 5);
                cx.fillRect(ox + 23, oy + 29, 4, 5);

                // 腰带
                cx.fillStyle = '#4a3a2a';
                cx.fillRect(ox + 5, oy + 34, 18, 2);

                // 腿部（纤细，6px 宽）
                const leftLegX = ox + 5 + (legOffset > 0 ? legOffset : 0);
                const rightLegX = ox + 15 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = pantsM;
                cx.fillRect(leftLegX, oy + 36, 6, 12);
                cx.fillRect(rightLegX, oy + 36, 6, 12);
                cx.fillStyle = pantsD;
                cx.fillRect(leftLegX, oy + 36, 2, 12);
                cx.fillRect(rightLegX + 4, oy + 36, 2, 12);
                cx.fillStyle = pantsL;
                cx.fillRect(leftLegX + 2, oy + 36, 1, 12);
                cx.fillRect(rightLegX + 2, oy + 36, 1, 12);

                // 鞋子（纤细）
                const leftShoeX = ox + 3 + (legOffset > 0 ? legOffset : 0);
                const rightShoeX = ox + 15 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = shoesM;
                cx.fillRect(leftShoeX, oy + 48, 8, 4);
                cx.fillRect(rightShoeX, oy + 48, 8, 4);
                cx.fillStyle = shoesD;
                cx.fillRect(leftShoeX, oy + 50, 8, 2);
                cx.fillRect(rightShoeX, oy + 50, 8, 2);

            } else if (dir === 'UP') {
                // 头发（后脑勺）
                cx.fillStyle = hairM;
                cx.fillRect(ox + 2, oy, 24, 6);
                cx.fillStyle = hairD;
                cx.fillRect(ox + 2, oy + 5, 24, 3);
                cx.fillStyle = hairL;
                cx.fillRect(ox + 6, oy + 1, 5, 2);
                cx.fillRect(ox + 17, oy + 1, 5, 2);

                // 耳朵（贴近头部，更大）
                cx.fillStyle = earC;
                cx.fillRect(ox + 3, oy + 6, 6, 8);
                cx.fillRect(ox + 19, oy + 6, 6, 8);

                // 脖子
                cx.fillStyle = skinD;
                cx.fillRect(ox + 12, oy + 8, 5, 3);

                // 身体（后背，纤细）
                cx.fillStyle = shirtM;
                cx.fillRect(ox + 4, oy + 11, 20, 14);
                cx.fillStyle = shirtD;
                cx.fillRect(ox + 4, oy + 11, 5, 14);
                cx.fillRect(ox + 19, oy + 11, 5, 14);
                cx.fillStyle = shirtD;
                cx.fillRect(ox + 14, oy + 13, 2, 10);
                cx.fillStyle = shirtL;
                cx.fillRect(ox + 14, oy + 17, 2, 1);

                // 袖口
                cx.fillStyle = sleeveEdge;
                cx.fillRect(ox, oy + 23, 4, 2);
                cx.fillRect(ox + 24, oy + 23, 4, 2);

                // 腰带
                cx.fillStyle = '#4a3a2a';
                cx.fillRect(ox + 5, oy + 25, 18, 2);

                // 腿部（后视，纤细）
                const leftLegX = ox + 5 + (legOffset > 0 ? legOffset : 0);
                const rightLegX = ox + 15 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = pantsM;
                cx.fillRect(leftLegX, oy + 27, 6, 12);
                cx.fillRect(rightLegX, oy + 27, 6, 12);
                cx.fillStyle = pantsD;
                cx.fillRect(leftLegX, oy + 27, 2, 12);
                cx.fillRect(rightLegX + 4, oy + 27, 2, 12);
                cx.fillStyle = pantsL;
                cx.fillRect(leftLegX + 2, oy + 27, 1, 12);
                cx.fillRect(rightLegX + 2, oy + 27, 1, 12);

                // 鞋子
                const leftShoeX = ox + 3 + (legOffset > 0 ? legOffset : 0);
                const rightShoeX = ox + 15 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = shoesM;
                cx.fillRect(leftShoeX, oy + 39, 8, 4);
                cx.fillRect(rightShoeX, oy + 39, 8, 4);
                cx.fillStyle = shoesD;
                cx.fillRect(leftShoeX, oy + 41, 8, 2);
                cx.fillRect(rightShoeX, oy + 41, 8, 2);

            } else if (dir === 'LEFT') {
                // 头发（侧视）
                cx.fillStyle = hairM;
                cx.fillRect(ox + 2, oy, 18, 4);
                cx.fillRect(ox, oy + 3, 20, 4);
                cx.fillStyle = hairL;
                cx.fillRect(ox + 6, oy + 1, 10, 2);
                cx.fillStyle = hairD;
                cx.fillRect(ox + 2, oy + 5, 18, 2);

                // 耳朵（侧视，贴近头部，更大）
                cx.fillStyle = earC;
                cx.fillRect(ox + 1, oy + 5, 7, 9);
                cx.fillStyle = skinDD;
                cx.fillRect(ox + 2, oy + 6, 5, 7);

                // 脸部（侧视，纤细）
                cx.fillStyle = skinM;
                cx.fillRect(ox + 4, oy + 6, 14, 10);
                cx.fillStyle = skinL;
                cx.fillRect(ox + 6, oy + 6, 10, 5);
                cx.fillStyle = skinD;
                cx.fillRect(ox + 4, oy + 14, 14, 2);

                // 眼睛（侧视）
                cx.fillStyle = whiteC;
                cx.fillRect(ox + 7, oy + 9, 4, 3);
                cx.fillStyle = blackC;
                cx.fillRect(ox + 9, oy + 10, 2, 2);

                // 嘴巴（侧视）
                cx.fillStyle = mouthC;
                cx.fillRect(ox + 10, oy + 14, 3, 2);

                // 脖子（侧视）
                cx.fillStyle = skinD;
                cx.fillRect(ox + 11, oy + 16, 5, 3);

                // 身体（侧视，纤细）
                cx.fillStyle = shirtM;
                cx.fillRect(ox + 2, oy + 19, 16, 14);
                cx.fillStyle = shirtD;
                cx.fillRect(ox + 10, oy + 19, 8, 14);
                cx.fillStyle = shirtL;
                cx.fillRect(ox + 6, oy + 19, 5, 2);

                // 徽章（侧视）
                cx.fillStyle = badgeY;
                cx.fillRect(ox + 4, oy + 21, 3, 3);

                // 手臂（后，侧视）
                cx.fillStyle = shirtM;
                cx.fillRect(ox + 16, oy + 19, 4, 6);
                cx.fillStyle = sleeveEdge;
                cx.fillRect(ox + 16, oy + 24, 4, 2);
                cx.fillStyle = skinM;
                cx.fillRect(ox + 17, oy + 26, 4, 4);

                // 腰带（侧视）
                cx.fillStyle = '#4a3a2a';
                cx.fillRect(ox + 2, oy + 33, 16, 2);

                // 腿部（侧视，纤细）
                const leftLegX = ox + 4 + (legOffset > 0 ? legOffset : 0);
                const rightLegX = ox + 11 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = pantsM;
                cx.fillRect(leftLegX, oy + 35, 6, 12);
                cx.fillRect(rightLegX, oy + 35, 6, 12);
                cx.fillStyle = pantsD;
                cx.fillRect(leftLegX, oy + 35, 2, 12);
                cx.fillRect(rightLegX + 4, oy + 35, 2, 12);

                // 鞋子（侧视）
                const leftShoeX = ox + 2 + (legOffset > 0 ? legOffset : 0);
                const rightShoeX = ox + 11 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = shoesM;
                cx.fillRect(leftShoeX, oy + 47, 8, 4);
                cx.fillRect(rightShoeX, oy + 47, 8, 4);
                cx.fillStyle = shoesD;
                cx.fillRect(leftShoeX, oy + 49, 8, 2);
                cx.fillRect(rightShoeX, oy + 49, 8, 2);

            } else {
                // 头发（右侧视）
                cx.fillStyle = hairM;
                cx.fillRect(ox + 8, oy, 18, 4);
                cx.fillRect(ox + 6, oy + 3, 20, 4);
                cx.fillStyle = hairL;
                cx.fillRect(ox + 12, oy + 1, 10, 2);
                cx.fillStyle = hairD;
                cx.fillRect(ox + 8, oy + 5, 18, 2);

                // 耳朵（右侧视，贴近头部，更大）
                cx.fillStyle = earC;
                cx.fillRect(ox + 20, oy + 5, 7, 9);
                cx.fillStyle = skinDD;
                cx.fillRect(ox + 19, oy + 6, 5, 7);

                // 脸部（右侧视，纤细）
                cx.fillStyle = skinM;
                cx.fillRect(ox + 8, oy + 6, 14, 10);
                cx.fillStyle = skinL;
                cx.fillRect(ox + 10, oy + 6, 10, 5);
                cx.fillStyle = skinD;
                cx.fillRect(ox + 8, oy + 14, 14, 2);

                // 眼睛（右侧视）
                cx.fillStyle = whiteC;
                cx.fillRect(ox + 17, oy + 9, 4, 3);
                cx.fillStyle = blackC;
                cx.fillRect(ox + 19, oy + 10, 2, 2);

                // 嘴巴（右侧视）
                cx.fillStyle = mouthC;
                cx.fillRect(ox + 14, oy + 14, 3, 2);

                // 脖子（右侧视）
                cx.fillStyle = skinD;
                cx.fillRect(ox + 12, oy + 16, 5, 3);

                // 身体（右侧视，纤细）
                cx.fillStyle = shirtM;
                cx.fillRect(ox + 10, oy + 19, 16, 14);
                cx.fillStyle = shirtD;
                cx.fillRect(ox + 10, oy + 19, 8, 14);
                cx.fillStyle = shirtL;
                cx.fillRect(ox + 16, oy + 19, 5, 2);

                // 手臂（前，右侧视）
                cx.fillStyle = shirtM;
                cx.fillRect(ox + 6, oy + 19, 4, 6);
                cx.fillStyle = sleeveEdge;
                cx.fillRect(ox + 6, oy + 24, 4, 2);
                cx.fillStyle = skinM;
                cx.fillRect(ox + 5, oy + 26, 4, 4);

                // 腰带（右侧视）
                cx.fillStyle = '#4a3a2a';
                cx.fillRect(ox + 10, oy + 33, 16, 2);

                // 腿部（右侧视，纤细）
                const leftLegX = ox + 11 + (legOffset > 0 ? legOffset : 0);
                const rightLegX = ox + 18 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = pantsM;
                cx.fillRect(leftLegX, oy + 35, 6, 12);
                cx.fillRect(rightLegX, oy + 35, 6, 12);
                cx.fillStyle = pantsD;
                cx.fillRect(leftLegX, oy + 35, 2, 12);
                cx.fillRect(rightLegX + 4, oy + 35, 2, 12);

                // 鞋子（右侧视）
                const leftShoeX = ox + 11 + (legOffset > 0 ? legOffset : 0);
                const rightShoeX = ox + 18 + (legOffset < 0 ? legOffset : 0);
                cx.fillStyle = shoesM;
                cx.fillRect(leftShoeX, oy + 47, 8, 4);
                cx.fillRect(rightShoeX, oy + 47, 8, 4);
                cx.fillStyle = shoesD;
                cx.fillRect(leftShoeX, oy + 49, 8, 2);
                cx.fillRect(rightShoeX, oy + 49, 8, 2);
            }

            sprites[`${dir}_${frame}`] = c;
        }
    }
    return sprites;
}
