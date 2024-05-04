# version 300 es
#define BUBBLE_AMOUNT 20
#define INIT_RADIUS 0.001
#define RADIUS_FACTOR 0.1
precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform vec4[BUBBLE_AMOUNT] bubble_info;
out vec4 fragColor;

void main()
{
  vec2 p = (2.0 * gl_FragCoord.xy - resolution) / min(resolution.x, resolution.y);
	// draw circles
	float a = 0.0;
	for (int i = 0; i < BUBBLE_AMOUNT; i++)
	{
		vec2 c = bubble_info[i].xy;
		float start_time = bubble_info[i].z;
		// float r = 0.1;
		float r = bubble_info[i].z;
		// float d = length(p - c) - r;
		float d = length(p - c) - r;
		// float d = r;
		// color += vec3(1.0) * max(0.0, (1.0 - step(0.01, abs(d))));
		a += 1.0 - step(0.008, abs(d));
	}
	// 重なっている部分はなし
	float aa = 1.0 - abs(a - 1.0);
	float green = smoothstep(0.0, 0.5, aa);
	float alpha = green * 0.2;
	fragColor = vec4(0.0, green, 0.0, alpha);
}
