#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
uniform float uS0, uT0;
uniform float uDs, uDt;
out vec2  	vST;		// texture coords

const float PI = 	3.14159265;
const float AMP = 	0.2;		// amplitude
const float W = 	2.;		// frequency

void
main( )
{ 
	vST = gl_MultiTexCoord0.st;
	vec3 vert = gl_Vertex.xyz;
	if (uDs == 1.0)
	{
		float pinch = 0.9 * (1.0 + sin(2.0 * PI * uTime));

		vert.x = vert.x * (1.0 - 0.5 * pinch * cos(vert.y));
vert.z = vert.z * (1.0 - 0.5 * pinch * cos(vert.y));
vert.y = vert.y * (1.0 - 0.3 * pinch);
	}
	else 
	{
		vert.x = vert.x;
		vert.y = vert.y;
		vert.z = vert.z;
	}

	gl_Position = gl_ModelViewProjectionMatrix * vec4( vert, 1. );
}
