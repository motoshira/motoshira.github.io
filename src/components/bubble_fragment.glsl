# version 300 es
#define BUBBLE_AMOUNT 20
precision mediump float;
uniform vec2 resolution;
uniform vec4[BUBBLE_AMOUNT] bubble_info;
out vec4 fragColor;

void main()
{
  vec2 p = (2.0 * gl_FragCoord.xy - resolution) / min(resolution.x, resolution.y);
	// draw circles
	vec3 color = vec3(1.0);
	for (int i = 0; i < BUBBLE_AMOUNT; i++)
	{
		vec2 c = bubble_info[i].xy;
		float r = bubble_info[i].z;
		// float d = length(p - c) - r;
		float d = length(p - c) - r;
		// float d = r;
		// color += vec3(1.0) * max(0.0, (1.0 - step(0.01, abs(d))));
		color -= vec3(1.0) * (1.0 - step(0.005, abs(d)));
	}
	float opacity = step(0.0, color.r) * 0.3;
	fragColor = vec4(color, opacity);
}
