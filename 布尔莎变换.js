//不二傻 空间坐标转换
//点对象
function P(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
}

function go(p, dx, dy, dz, ex, ey, ez, m) {
	var r = {};
	// 秒转弧度
	ex = ex / (60 * 60 * 180) * Math.PI;
	ey = ey / (60 * 60 * 180) * Math.PI;
	ez = ez / (60 * 60 * 180) * Math.PI;
	r.x = dx - ey * p.z + p.y * ez + m * p.x + p.x;
	r.y = dy + ex * (p.z) - ez * p.x + m * p.y + p.y;
	r.z = dz - ex * p.y + ey * p.x + m * p.z + p.z;
	return r;
}
// var p= new P(-2335312.255563,4588529.441417,3752000.626117)
// go(p,5.141583,-10.581287,-8.569386,-0.93807171,1.85434123,-3.17750934,1.81472300e-006)
