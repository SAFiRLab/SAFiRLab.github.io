---
title: Code
subtitle: Code and tools released by the SAFiR Lab
hero_image: /assets/photos/racecar.jpeg
hero_link: https://github.com/SAFiRLab
hero_link_text: Our GitHub repositories
---

<p class="home-intro">At the SAFiR Lab, we believe that reproducible research accelerates scientific progress. Whenever possible, we release the software, datasets, and tools developed in our research to support the robotics community and facilitate the adoption, validation, and extension of our work.</p>

<div class="content pub-list">
  <div class="pub-item">
    <figure class="pub-figure">
      <img src="{{ '/assets/papers/web/ARENA.png' | relative_url }}" alt="ARENA">
    </figure>
    <div class="pub-body">
      <p class="pub-title"><strong>ARENA: Adaptive Risk-aware Navigation for Autonomous Aerial Inspection</strong></p>
      <p class="pub-authors">An adaptive risk-aware multi-objective framework for UAV 3D path planning. ARENA is a standalone library.</p>
      <div class="pub-links">
        <a class="button is-small is-safir" href="https://github.com/SAFiRLab/ARENA" target="_blank" rel="noopener">Code</a>
      </div>
    </div>
  </div>

  <div class="pub-item">
    <figure class="pub-figure">
      <img src="{{ '/assets/papers/web/RRT_Rope.png' | relative_url }}" alt="RRT-Rope">
    </figure>
    <div class="pub-body">
      <p class="pub-title"><strong>RRT-Rope: A deterministic shortening approach for fast near-optimal path planning</strong></p>
      <p class="pub-authors">A fast shortest path planning approach, integrated into the Open Motion Planning Library (OMPL).</p>
      <div class="pub-links">
        <a class="button is-small is-safir" href="https://github.com/SAFiRLab/rrt-rope" target="_blank" rel="noopener">Code</a>
        <button type="button" class="button is-small is-safir" aria-expanded="false" aria-controls="ompl-usage" data-bibtex-toggle>OMPL usage</button>
      </div>
      <div class="pub-bibtex" id="ompl-usage" hidden>
        <p>To use it in robotics applications or other planning pipelines, the RRT-Rope algorithm is available directly in the <a href="https://ompl.kavrakilab.org/index.html" target="_blank" rel="noopener">Open Motion Planning Library (OMPL)</a>. It is implemented as the <code>ropeShortcutPath</code> function, documented <a href="https://ompl.kavrakilab.org/classompl_1_1geometric_1_1PathSimplifier.html#a769875a6b05a77835ff0eaa2e948a221" target="_blank" rel="noopener">here</a>. Below is a minimal example of how to use it:</p>
        <div class="pub-code">
          <button type="button" class="button is-small is-safir pub-copy" data-copy>Copy</button>
<pre><code><span class="tk-pp">#include</span> <span class="tk-str">&lt;ompl/geometric/planners/rrt/RRTConnect.h&gt;</span>
<span class="tk-pp">#include</span> <span class="tk-str">&lt;ompl/geometric/PathGeometric.h&gt;</span>

<span class="tk-com">// Assuming 'planner' is an instance of ompl::geometric::RRTConnect</span>
<span class="tk-fn">getPlanner</span>()-&gt;<span class="tk-fn">as</span>&lt;ompl::geometric::<span class="tk-type">RRTConnect</span>&gt;()-&gt;<span class="tk-fn">setProblemDefinition</span>(<span class="tk-fn">getProblemDefinition</span>());

<span class="tk-com">// Attempt to solve the problem within a given planning time</span>
ompl::base::<span class="tk-type">PlannerStatus</span> solved = planner_-&gt;<span class="tk-fn">solve</span>(<span class="tk-num">1.0</span>);

<span class="tk-com">// Get the solution path</span>
<span class="tk-kw">auto</span> *sln = <span class="tk-kw">static_cast</span>&lt;ompl::geometric::<span class="tk-type">PathGeometric</span>*&gt;(<span class="tk-fn">getProblemDefinition</span>()-&gt;<span class="tk-fn">getSolutionPath</span>().<span class="tk-fn">get</span>());

<span class="tk-com">// Perform Rope Shortcut</span>
<span class="tk-fn">getPathSimplifier</span>()-&gt;<span class="tk-fn">ropeShortcutPath</span>(*sln);</code></pre>
        </div>
      </div>
    </div>
  </div>
</div>
