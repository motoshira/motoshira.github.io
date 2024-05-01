# version 300 es
precision mediump float;
uniform vec2 resolution;
out vec4 fragColor;

void main()
{
  vec2 p = (2.0 * gl_FragCoord.xy - resolution) / min(resolution.x, resolution.y);
	// draw circles
	vec3 color = vec3(0.0);
	for (int i = 0; i < 10; i++)
	{
		vec2 c = vec2(float(i) * 0.2-1.0);
		float r = 0.1;
		float d = length(c - p) - r;
		color += vec3(0.0, 1.0, 0.0) * (0.01 / sqrt(abs(d));
	}
	fragColor = vec4(color, 1.0);
}
