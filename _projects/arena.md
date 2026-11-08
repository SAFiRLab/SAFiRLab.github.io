---
title: "ARENA: Adaptive Risk-aware Navigation for Autonomous Aerial Inspection"
hero_links:
  - text: PDF
    url: https://arxiv.org/abs/2502.19401
  - text: Code
    url: https://github.com/SAFiRLab/ARENA
authors:
  - name: David-Alexandre Poissant
    url: /team/david-alexandre-poissant/
  - name: Alexis Lussier Desbiens
  - name: François Ferland
  - name: Louis Petit
    url: /team/louis-petit/
bibtex: |
  @article{poissant2027arena,
    author = {Poissant, David-Alexandre and Desbiens, Alexis Lussier and Ferland, Fran{\c{c}}ois and Petit, Louis},
    title = {ARENA: Adaptive Risk-aware Navigation for Autonomous Aerial Inspection},
    journal = {IEEE Robotics and Automation Letters (RA-L)},
    year = {2027},
    note = {Under review},
    url = {https://arxiv.org/abs/2502.19401}
  }
---

<div class="photo-ratio-row">
  <figure style="--ar: 1.2463">
    <a href="{{ '/assets/projects/arena/01.png' | relative_url }}" data-lightbox="arena" title="Enlarge">
      <img src="{{ '/assets/projects/arena/01.png' | relative_url }}" alt="ARENA figure 1">
    </a>
  </figure>
  <figure style="--ar: 1.7753">
    <a href="{{ '/assets/projects/arena/02.png' | relative_url }}" data-lightbox="arena" title="Enlarge">
      <img src="{{ '/assets/projects/arena/02.png' | relative_url }}" alt="ARENA figure 2">
    </a>
  </figure>
</div>

<div class="photo-ratio-row">
  <figure style="--ar: 1.6710">
    <a href="{{ '/assets/projects/arena/03.png' | relative_url }}" data-lightbox="arena" title="Enlarge">
      <img src="{{ '/assets/projects/arena/03.png' | relative_url }}" alt="ARENA figure 3">
    </a>
  </figure>
  <figure style="--ar: 1.1734">
    <a href="{{ '/assets/projects/arena/04.png' | relative_url }}" data-lightbox="arena" title="Enlarge">
      <img src="{{ '/assets/projects/arena/04.png' | relative_url }}" alt="ARENA figure 4">
    </a>
  </figure>
</div>

## Abstract

Autonomous robotic inspection missions require balancing multiple conflicting objectives while navigating near costly obstacles. Current multi-objective path planning (MOPP) methods struggle to adapt to evolving risks like localization errors, weather, battery state, and communication issues. This letter presents an Adaptive Risk-aware and Energy-efficient NAvigation (ARENA) MOPP approach for UAVs in complex 3D environments. Our method enables online trajectory adaptation by optimizing safety, time, and energy using 4D NURBS representation and a genetic-based algorithm to generate the Pareto front. A novel risk-aware voting algorithm ensures adaptivity. Simulations and real-world tests demonstrate the planner's ability to produce diverse, optimized trajectories covering 95% or more of the range defined by single-objective benchmarks and its ability to estimate power consumption with a mean error representing 14% of the full power range. The ARENA framework enhances UAV autonomy and reliability in critical, evolving 3D missions.