---
title: "TAPE: Tether-Aware Path Planning for Autonomous Exploration of Unknown 3D Cavities using a Tangle-compatible Tethered Aerial Robot"
subtitle: RA-L & IROS 2022 - Kyoto, Japan
hero_links:
  - text: PDF
    url: https://arxiv.org/abs/2606.30817
  - text: Video
    url: https://www.youtube.com/watch?v=pin22RmgD0k
authors:
  - name: Louis Petit
    url: /team/louis-petit/
  - name: Alexis Lussier Desbiens
bibtex: |
  @article{petit2022tape,
    author = {Petit, Louis and Desbiens, Alexis Lussier},
    title = {TAPE: Tether-Aware Path Planning for Autonomous Exploration of Unknown 3D Cavities Using a Tangle-Compatible Tethered Aerial Robot},
    journal = {IEEE Robotics and Automation Letters (RA-L)},
    year = {2022},
    url = {https://arxiv.org/abs/2606.30817}
  }
---

<div class="columns is-centered is-multiline is-mobile group-photos">

  <div class="column is-6-desktop is-8-tablet is-12-mobile group-photo">
    <figure>
      <a href="{{ '/assets/projects/tape/01.png' | relative_url }}" data-lightbox="tape" title="Enlarge">
        <img src="{{ '/assets/projects/tape/01.png' | relative_url }}" alt="TAPE figure 1">
      </a>
    </figure>
  </div>
</div>

## What is TAPE?

TAPE is the first method for autonomous exploration of unknown cavities in three dimensions (3D) that focuses on minimizing the distance traveled and the length of tether unwound. Considering that the tether entanglements are little influenced by the global path, our approach employs a 2-level hierarchical architecture. The global frontier-based planning solves a Traveling Salesman Problem (TSP) to minimize the distance. The local planning attempts to minimize the path cost and the tether length using an adjustable decision function whose parameters play on the trade-off between these two values. On average, our method generates a 4.1% increase in distance traveled compared to the TSP solution without our local planner, with which the length of the tether remains below the maximum allowed value in 53% of the simulated cases against 100% with our method.

## Why?

The idea comes from an autonomous drone project designed to map underground mining stopes. Mining cavities are large and pose challenges of autonomy, calculation and communication. The presence of a tether allows for the transmission of energy for long-duration missions, for parallel calculations with a remote computer, and for safe and reliable communication with a ground station. In order for the drone to continue its route when the tether gets caught, the NetherDrone designed by our group has an onboard tether spool. That being said, the length of the onboard tether contributes to the mass of the drone and must be minimized. The idea of the project is to develop an autonomous exploration algorithm that minimizes the travel distance (i.e. the exploration time) as well as the length of the unrolled tether.

<div class="columns is-centered is-multiline is-mobile project-videos">
  <div class="column is-6-desktop is-6-tablet is-12-mobile">
    <div class="video-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/pin22RmgD0k" title="TAPE video 1: simulation with annotations" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  <div class="column is-6-desktop is-6-tablet is-12-mobile">
    <div class="video-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/9gd1s2SB6ag" title="TAPE video 2: paper presentation" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>
