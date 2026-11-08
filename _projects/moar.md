---
title: "MOAR Planner: Multi-Objective and Adaptive Risk-Aware Path Planning for Infrastructure Inspection with a UAV"
subtitle: ICRA 2024 - Yokohama, Japan
hero_links:
  - text: PDF
    url: https://arxiv.org/abs/2606.30575
  - text: Demo
    url: https://www.louispetit.be/demo/moar-demo
  - text: Video
    url: https://www.youtube.com/watch?v=tsSP4-WjUH8
authors:
  - name: Louis Petit
    url: /team/louis-petit/
  - name: Alexis Lussier Desbiens
bibtex: |
  @inproceedings{petit2024moar,
    author = {Petit, Louis and Desbiens, Alexis Lussier},
    title = {MOAR Planner: Multi-Objective and Adaptive Risk-Aware Path Planning for Infrastructure Inspection with a UAV},
    booktitle = {2024 IEEE International Conference on Robotics and Automation (ICRA)},
    year = {2024},
    url = {https://arxiv.org/abs/2606.30575}
  }
---

<div class="columns is-centered is-multiline is-mobile group-photos">

  <div class="column is-6-desktop is-8-tablet is-12-mobile group-photo">
    <figure>
      <a href="{{ '/assets/projects/moar/01.png' | relative_url }}" data-lightbox="moar" title="Enlarge">
        <img src="{{ '/assets/projects/moar/01.png' | relative_url }}" alt="MOAR planner figure 1">
      </a>
    </figure>
  </div>
</div>

## What is the MOAR Planner?

The MOAR Planner is an adaptive multi-objective path planner that addresses the complexities of evolving risks during missions. It offers real-time and spatial trajectory adaptation while concurrently optimizing safety, time, and energy. The produced trajectories cover between 90 and 150% of the range of metrics obtained by benchmark planning algorithms, e.g., in terms of trajectory length and minimum clearance. The planner employs a risk-aware cost function that integrates pre-computed cost maps, the new concepts of damage and insertion costs, and an adaptive speed planning framework. With that, the optimal path is searched in a graph using a discrete representation of the state and action spaces in 2D.

## Why?

The idea originates from an autonomous UAV project designed to inspect power line infrastructures. The problem of autonomous navigation for UAV inspection remains challenging as it requires effectively navigating in close proximity to obstacles, while accounting for dynamic risk factors such as weather conditions, communication reliability, localization errors, and battery autonomy. The idea of the project is to develop an autonomous navigation algorithm that simultaneously meets several objectives (time, safety, energy) while adapting to the risks that evolve during a mission (instabilities, communication, localization, endurance).

<div class="columns is-centered is-multiline is-mobile project-videos">
  <div class="column is-6-desktop is-6-tablet is-12-mobile">
    <div class="video-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/OLyQJHhfFB0" title="MOAR Planner video 1" loading="lazy" allowfullscreen></iframe>
    </div>
  </div>
  <div class="column is-6-desktop is-6-tablet is-12-mobile">
    <div class="video-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/tsSP4-WjUH8" title="MOAR Planner video 2" loading="lazy" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="columns is-centered is-multiline is-mobile group-photos">
  <div class="column is-6-desktop is-8-tablet is-12-mobile group-photo">
    <figure>
      <a href="{{ '/assets/projects/moar/02.png' | relative_url }}" data-lightbox="moar" title="Enlarge">
        <img src="{{ '/assets/projects/moar/02.png' | relative_url }}" alt="MOAR planner figure 2">
      </a>
    </figure>
  </div>
</div>
