USE THIS NAVBAR IMPLEMENTATION AS THE STRUCTURAL REFERENCE.

Do NOT redesign the navbar from scratch.
Recreate this same shape logic, proportions and behavior.

Navbar code reference:

Desktop initial navbar:
- transparent over hero
- logo on the left
- custom white SVG shape in the center containing nav links
- separate CTA button on the right

Desktop sticky navbar on scroll:
- one single white custom SVG shape containing logo, nav links and CTA
- compact version
- appears after scrolling

Navigation items:
- SERVICIOS
- EQUIPO
- METODOLOGÍA
- QUIÉNES SOMOS

Keep the text hierarchy:
- SERVICIOS = small
- EQUIPO = medium
- METODOLOGÍA = large
- QUIÉNES SOMOS = small

Exact SVG shape for the initial desktop navbar:
<svg
  viewBox="0 0 1400 180"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M 0,0 
       L 0,30 
       L 50,135 
       Q 70,165 110,165 
       L 1290,165 
       Q 1330,165 1350,135 
       L 1400,30 
       L 1400,0 
       Z"
    fill="white"
  />
</svg>

Exact SVG shape for the sticky compact navbar:
<svg
  viewBox="0 0 1600 140"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M 0,0 
       L 0,20 
       L 50,110 
       Q 65,135 100,135 
       L 1500,135 
       Q 1535,135 1550,110 
       L 1600,20 
       L 1600,0 
       Z"
    fill="white"
  />
</svg>

Exact React structure reference:

const navItems = [
  { name: "SERVICIOS", href: "#servicios" },
  { name: "EQUIPO", href: "#equipo" },
  { name: "METODOLOGÍA", href: "#metodologia" },
  { name: "QUIÉNES SOMOS", href: "#nosotros" }
];

Desktop center navigation content:
<div className="relative z-10 flex items-center justify-center space-x-8 lg:space-x-12 px-16 lg:px-24 py-10 pt-4">
  {navItems.map((item, index) => {
    const sizeClasses = [
      'text-xs lg:text-sm',
      'text-sm lg:text-base',
      'text-base lg:text-lg',
      'text-xs lg:text-sm'
    ];
    return (
      <a className={`relative ${sizeClasses[index]} font-bold tracking-widest whitespace-nowrap`}>
        {item.name}
      </a>
    );
  })}
</div>

Sticky compact navbar content:
<div className="relative z-10 flex items-center justify-between px-10 lg:px-16 py-8 pt-4">
  <div>Logo left</div>
  <div className="flex items-center space-x-8 lg:space-x-12 flex-1 justify-center">
    nav items here
  </div>
  <div>CTA right</div>
</div>

Behavior requirements:
- initial navbar is transparent over hero
- sticky navbar appears after scrollY > 100
- smooth transition
- maintain the exact white floating shape concept
- do NOT convert into a pill, strip or normal rounded rectangle
- preserve the premium floating look