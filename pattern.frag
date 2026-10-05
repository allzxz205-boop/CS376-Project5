#version 330 compatibility
uniform float	uTime;		// "Time", from Animate( )
uniform float uS0, uT0;
uniform float uDs, uDt;
// float uSize = 0.1 * sin(3.14159265*uTime);
in vec2  	vST;		// texture coords

void
main( )
{
	vec3 myColor = vec3( 1.0,0.5,0.0 );
	if (uDt == 1.0)
	{
		//if(uS0-uSize <= vST.s && vST.s <= uS0+uSize && uT0-uSize <= vST.t && vST.t <= uT0+uSize)
		//if (vST.s <= 0.5 -uSize && vST.t <=0.5 -uSize)
		//{
		//	myColor = vec3(1.0*uTime,1.0*uTime,0.0*uTime);
		float dist = distance(vST, vec2(uS0, uT0));

		float ring = sin(30.0 * dist - 6.2831853 * uTime);
		if (dist <= 0.4 && ring > 0.0)
		{
			myColor = vec3(0.1, 0.85, 1.0);
		
		}
	}
	else if (uDt == 0.0)
		{
			myColor = vec3( 1.0,0.5,0.0 );
		}
	gl_FragColor = vec4( myColor,  1.0 );
}
