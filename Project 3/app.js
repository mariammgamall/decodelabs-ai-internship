// Initial Recommendation Database
const DEFAULT_DATABASE = [
  // MOVIES
  {
    id: "m-1",
    title: "Inception",
    category: "movies",
    genres: ["Sci-Fi", "Thriller", "Action"],
    moods: ["Mind-bending", "Thrilling", "Epic"],
    attributes: { pace: 4, complexity: 5, era: 4 }, // 4=2000s, 5=2010s+
    illustration: "🧠",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    whyYouWillLikeIt: "The ultimate combination of intense action and structural mind games."
  },
  {
    id: "m-2",
    title: "Interstellar",
    category: "movies",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    moods: ["Mind-bending", "Emotional", "Epic"],
    attributes: { pace: 3, complexity: 4, era: 4 },
    illustration: "🚀",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival under deteriorating conditions on Earth.",
    whyYouWillLikeIt: "Combines grand cosmic physics with a deeply emotional father-daughter bond."
  },
  {
    id: "m-3",
    title: "Spirited Away",
    category: "movies",
    genres: ["Fantasy", "Adventure", "Family"],
    moods: ["Chill", "Emotional", "Inspiring"],
    attributes: { pace: 2, complexity: 3, era: 4 },
    illustration: "🐉",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    whyYouWillLikeIt: "A magical, hand-drawn journey with a soothing, atmospheric flow."
  },
  {
    id: "m-4",
    title: "The Dark Knight",
    category: "movies",
    genres: ["Action", "Thriller", "Crime"],
    moods: ["Thrilling", "Epic", "Dark"],
    attributes: { pace: 5, complexity: 3, era: 4 },
    illustration: "🦇",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    whyYouWillLikeIt: "A high-octane crime thriller featuring an iconic, legendary antagonist."
  },
  {
    id: "m-5",
    title: "Pulp Fiction",
    category: "movies",
    genres: ["Crime", "Drama", "Comedy"],
    moods: ["Chill", "Thrilling", "Dark"],
    attributes: { pace: 4, complexity: 4, era: 3 }, // 3=1990s
    illustration: "🕶️",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    whyYouWillLikeIt: "Non-linear storytelling paired with cool, fast-paced dialogue."
  },
  {
    id: "m-6",
    title: "2001: A Space Odyssey",
    category: "movies",
    genres: ["Sci-Fi", "Mystery", "Adventure"],
    moods: ["Mind-bending", "Chill", "Epic"],
    attributes: { pace: 1, complexity: 5, era: 1 }, // 1=Classic (pre-1980)
    illustration: "🌌",
    description: "After uncovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with the help of supercomputer H.A.L. 9000.",
    whyYouWillLikeIt: "A slow-paced, philosophical masterpiece exploring human evolution."
  },

  // BOOKS
  {
    id: "b-1",
    title: "Dune",
    category: "books",
    genres: ["Sci-Fi", "Adventure", "Fantasy"],
    moods: ["Epic", "Mind-bending"],
    attributes: { pace: 3, complexity: 5, era: 1 },
    illustration: "🏜️",
    description: "Set in the far future amidst a sprawling feudal interstellar empire, Dune tells the story of Paul Atreides as his family accepts control of the desert planet Arrakis.",
    whyYouWillLikeIt: "A complex web of politics, religion, and ecology in a vast sci-fi setting."
  },
  {
    id: "b-2",
    title: "The Hobbit",
    category: "books",
    genres: ["Fantasy", "Adventure", "Family"],
    moods: ["Chill", "Inspiring", "Epic"],
    attributes: { pace: 3, complexity: 2, era: 1 },
    illustration: "💍",
    description: "Bilbo Baggins, a cozy homebody hobbit, is swept away on a dangerous quest by the wizard Gandalf and thirteen dwarves to reclaim their treasure from a dragon.",
    whyYouWillLikeIt: "A classic adventure filled with warmth, whimsy, and cozy fantasy tones."
  },
  {
    id: "b-3",
    title: "Project Hail Mary",
    category: "books",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    moods: ["Inspiring", "Thrilling", "Emotional"],
    attributes: { pace: 4, complexity: 3, era: 5 }, // 5=2020s
    illustration: "🔬",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission to save humanity. The only problem is he has amnesia, and must science his way out.",
    whyYouWillLikeIt: "A fast-paced, highly engaging sci-fi survival story about friendship and science."
  },
  {
    id: "b-4",
    title: "The Great Gatsby",
    category: "books",
    genres: ["Classic", "Drama", "Romance"],
    moods: ["Emotional", "Chill", "Dark"],
    attributes: { pace: 2, complexity: 3, era: 1 },
    illustration: "🍸",
    description: "Jay Gatsby, a wealthy and mysterious man, throws extravagant parties in hopes of reuniting with his lost love, Daisy Buchanan, in Jazz Age Long Island.",
    whyYouWillLikeIt: "A beautiful, lyrical examination of obsession and the American Dream."
  },
  {
    id: "b-5",
    title: "Neuromancer",
    category: "books",
    genres: ["Sci-Fi", "Crime", "Thriller"],
    moods: ["Mind-bending", "Thrilling", "Dark"],
    attributes: { pace: 4, complexity: 4, era: 2 }, // 2=1980s
    illustration: "💾",
    description: "A washed-up computer hacker is hired by a mysterious employer to pull off the ultimate hack against a powerful artificial intelligence.",
    whyYouWillLikeIt: "The foundational cyberpunk classic packed with raw style and tech concepts."
  },
  {
    id: "b-6",
    title: "Atomic Habits",
    category: "books",
    genres: ["Self-Help", "Psychology", "Family"],
    moods: ["Inspiring", "Chill"],
    attributes: { pace: 3, complexity: 1, era: 5 },
    illustration: "📈",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day by building good habits and breaking bad ones.",
    whyYouWillLikeIt: "Clear, practical logic to optimize your daily patterns and achieve progress."
  },

  // GAMES
  {
    id: "g-1",
    title: "The Witcher 3: Wild Hunt",
    category: "games",
    genres: ["RPG", "Fantasy", "Adventure"],
    moods: ["Epic", "Emotional", "Dark"],
    attributes: { pace: 3, complexity: 4, era: 5 },
    illustration: "⚔️",
    description: "Geralt of Rivia, a monster hunter, embarks on a massive journey across the Northern Kingdoms to find his adoptive daughter fleeing the otherworldly Wild Hunt.",
    whyYouWillLikeIt: "Deeply detailed quest lines, rich moral ambiguity, and immersive fantasy lore."
  },
  {
    id: "g-2",
    title: "Elden Ring",
    category: "games",
    genres: ["RPG", "Action", "Fantasy"],
    moods: ["Epic", "Thrilling", "Dark"],
    attributes: { pace: 4, complexity: 5, era: 5 },
    illustration: "🌋",
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    whyYouWillLikeIt: "Challenging combat combined with a breathtaking world of discovery."
  },
  {
    id: "g-3",
    title: "Portal 2",
    category: "games",
    genres: ["Puzzle", "Sci-Fi", "Comedy"],
    moods: ["Mind-bending", "Chill", "Inspiring"],
    attributes: { pace: 2, complexity: 4, era: 4 },
    illustration: "🌀",
    description: "Trapped in the mysterious Aperture Science facility, use the portal gun to solve physics puzzles and survive a sarcastic, rogue AI.",
    whyYouWillLikeIt: "Genius level puzzle design wrapped in a highly humorous, polished story."
  },
  {
    id: "g-4",
    title: "Doom Eternal",
    category: "games",
    genres: ["Action", "Shooter", "Sci-Fi"],
    moods: ["Thrilling", "Epic"],
    attributes: { pace: 5, complexity: 2, era: 5 },
    illustration: "🔥",
    description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the ruin of humanity.",
    whyYouWillLikeIt: "Adrenaline-fueled, lightning-fast combat loops that reward high energy."
  },
  {
    id: "g-5",
    title: "Stardew Valley",
    category: "games",
    genres: ["Simulation", "RPG", "Family"],
    moods: ["Chill", "Inspiring", "Emotional"],
    attributes: { pace: 1, complexity: 2, era: 5 },
    illustration: "🚜",
    description: "You've inherited your grandfather's old farm plot. Armed with hand-me-down tools and a few coins, set out to start a cozy, new life in the valley.",
    whyYouWillLikeIt: "A relaxed, charming escape centered around building a community and farm."
  },
  {
    id: "g-6",
    title: "Tetris Effect: Connected",
    category: "games",
    genres: ["Puzzle", "Casual", "Music"],
    moods: ["Chill", "Mind-bending", "Inspiring"],
    attributes: { pace: 3, complexity: 1, era: 5 },
    illustration: "🧱",
    description: "A gorgeous remake of the classic puzzle game, merging beautiful spatial visuals, music, and blocks into a synesthetic sensory journey.",
    whyYouWillLikeIt: "A hypnotizing, beautiful experience that feels like active meditation."
  }
];

// App State
let db = [...DEFAULT_DATABASE];
let activeCategory = "movies";
let selectedGenres = new Set();
let selectedMoods = new Set();

// Genre and Mood list by Category (computed dynamically)
const GENRE_MAP = {
  movies: ["Sci-Fi", "Thriller", "Action", "Drama", "Adventure", "Fantasy", "Family", "Crime", "Comedy"],
  books: ["Sci-Fi", "Adventure", "Fantasy", "Family", "Thriller", "Drama", "Classic", "Romance", "Crime", "Self-Help", "Psychology"],
  games: ["RPG", "Fantasy", "Adventure", "Action", "Puzzle", "Sci-Fi", "Comedy", "Shooter", "Simulation", "Family", "Casual", "Music"]
};

const MOOD_LIST = ["Mind-bending", "Thrilling", "Epic", "Emotional", "Chill", "Dark", "Inspiring"];

// Vector calculation helper values
const MAX_ATTR_DISTANCE = Math.sqrt(4 * 4 + 4 * 4 + 4 * 4); // Max distance between vectors (1,1,1) and (5,5,5)

// Similarity Functions
function calculateJaccardSimilarity(userSet, itemArray) {
  if (userSet.size === 0) return 1.0; // If user selected nothing, don't penalize
  
  const itemSet = new Set(itemArray);
  const intersection = new Set([...userSet].filter(x => itemSet.has(x)));
  const union = new Set([...userSet, ...itemSet]);
  
  return intersection.size / union.size;
}

function calculateAttributeSimilarity(userAttrs, itemAttrs) {
  // Compute Euclidean distance in 3D space: pace, complexity, era
  const dPace = userAttrs.pace - itemAttrs.pace;
  const dComp = userAttrs.complexity - itemAttrs.complexity;
  const dEra = userAttrs.era - itemAttrs.era;
  
  const distance = Math.sqrt(dPace * dPace + dComp * dComp + dEra * dEra);
  return 1 - (distance / MAX_ATTR_DISTANCE);
}

function renderIllustration(illustration, isInline = false) {
  if (!illustration) return "🔮";
  const isUrl = illustration.startsWith("http://") || 
                illustration.startsWith("https://") || 
                illustration.startsWith("./") || 
                illustration.startsWith("/") ||
                /\.(jpg|jpeg|png|webp|gif|svg)/i.test(illustration);
                
  if (isUrl) {
    if (isInline) {
      return `<img src="${illustration}" style="width: 1.25rem; height: 1.25rem; object-fit: cover; border-radius: 4px; vertical-align: middle; margin-right: 0.25rem;" alt="">`;
    }
    return `<img src="${illustration}" class="card-illustration-image" alt="Cover Image">`;
  }
  if (isInline) {
    return `<span style="margin-right: 0.25rem; vertical-align: middle;">${illustration}</span>`;
  }
  return `<span class="card-illustration-emoji">${illustration}</span>`;
}

// Main Recommendation Matching Logic
function calculateMatchScore(userPreferences, item) {
  // 1. Genre similarity (Jaccard)
  const genreSim = calculateJaccardSimilarity(userPreferences.genres, item.genres);
  
  // 2. Mood similarity (Jaccard)
  const moodSim = calculateJaccardSimilarity(userPreferences.moods, item.moods);
  
  // 3. Slider/Attribute similarity (Euclidean Vector distance)
  const attrSim = calculateAttributeSimilarity(userPreferences.attributes, item.attributes);
  
  // Weight Breakdown: Genres (40%), Moods (35%), Attributes (25%)
  let finalScore = (0.40 * genreSim) + (0.35 * moodSim) + (0.25 * attrSim);
  
  // Return values and scores
  return {
    score: Math.round(finalScore * 100),
    breakdown: {
      genreSim: Math.round(genreSim * 100),
      moodSim: Math.round(moodSim * 100),
      attrSim: Math.round(attrSim * 100)
    }
  };
}

// Load Custom Items from LocalStorage
function loadCustomItems() {
  const custom = localStorage.getItem("ai_recommender_custom_items");
  if (custom) {
    try {
      const items = JSON.parse(custom);
      db = [...DEFAULT_DATABASE, ...items];
    } catch (e) {
      console.error("Failed to parse custom items", e);
    }
  }
}

// Save Custom Item to Database
function saveCustomItem(newItem) {
  const custom = localStorage.getItem("ai_recommender_custom_items");
  let items = [];
  if (custom) {
    try {
      items = JSON.parse(custom);
    } catch (e) {}
  }
  items.push(newItem);
  localStorage.setItem("ai_recommender_custom_items", JSON.stringify(items));
  db.push(newItem);
}

// Delete custom item from DB
function deleteCustomItem(id) {
  const custom = localStorage.getItem("ai_recommender_custom_items");
  if (custom) {
    try {
      let items = JSON.parse(custom);
      items = items.filter(item => item.id !== id);
      localStorage.setItem("ai_recommender_custom_items", JSON.stringify(items));
    } catch (e) {}
  }
  db = db.filter(item => item.id !== id);
}

// Gather UI User Preferences
function getUserPreferences() {
  const paceVal = parseInt(document.getElementById("slider-pace").value);
  const compVal = parseInt(document.getElementById("slider-complexity").value);
  const eraVal = parseInt(document.getElementById("slider-era").value);
  
  return {
    category: activeCategory,
    genres: selectedGenres,
    moods: selectedMoods,
    attributes: {
      pace: paceVal,
      complexity: compVal,
      era: eraVal
    },
    searchQuery: document.getElementById("search-input").value.trim().toLowerCase()
  };
}

// Generate Recommendations
function getRecommendations() {
  const prefs = getUserPreferences();
  
  // Filter by category
  let filtered = db.filter(item => item.category === prefs.category);
  
  // Search keyword filter
  if (prefs.searchQuery) {
    filtered = filtered.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(prefs.searchQuery);
      const matchDesc = item.description.toLowerCase().includes(prefs.searchQuery);
      const matchGenre = item.genres.some(g => g.toLowerCase().includes(prefs.searchQuery));
      return matchTitle || matchDesc || matchGenre;
    });
  }
  
  // Compute scores and sort
  const scoredItems = filtered.map(item => {
    const calculation = calculateMatchScore(prefs, item);
    return {
      item,
      score: calculation.score,
      breakdown: calculation.breakdown
    };
  });
  
  // Sort descending
  scoredItems.sort((a, b) => b.score - a.score);
  return scoredItems;
}

// Toast UI notifications
function showToast(message, type = "cyan") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.borderLeftColor = `var(--accent-${type})`;
  toast.innerHTML = `
    <span>✨</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  // Remove toast after animation completes
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// View manager
function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
  
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.toggle("active", content.id === `${tabId}-content`);
  });
  
  if (tabId === "visualizer") {
    renderVisualizer();
  } else if (tabId === "database") {
    renderDatabaseList();
  } else if (tabId === "tests") {
    runAutomatedTests();
  } else {
    renderRecommendations();
  }
}

// UI Rendering - Recommendations
function renderRecommendations() {
  const grid = document.getElementById("recommendations-grid");
  const countSpan = document.getElementById("results-count-span");
  
  const recommendations = getRecommendations();
  countSpan.textContent = `${recommendations.length} items found`;
  
  if (recommendations.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">No Recommendations Found</div>
        <div class="empty-desc">Try widening your filters, choosing fewer genres/moods, or clearing your keyword search.</div>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = recommendations.map(({ item, score, breakdown }) => {
    const tagsHTML = item.genres.map(g => `<span class="card-tag">${g}</span>`).join("");
    const matchesList = [...selectedGenres].filter(g => item.genres.includes(g)).concat(
      [...selectedMoods].filter(m => item.moods.includes(m))
    );
    const reasonText = matchesList.length > 0 
      ? `Matches: ${matchesList.slice(0, 2).join(", ")}`
      : `Attribute affinity is strong`;
      
    return `
      <div class="card recommend-card" data-id="${item.id}">
        <div class="card-backdrop">
          <span class="card-badge-type">${item.category}</span>
          <span class="match-ring">${score}% Match</span>
          <div class="card-illustration">${renderIllustration(item.illustration)}</div>
        </div>
        <div class="card-info">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.description}</p>
          <div class="card-tags">
            ${tagsHTML}
          </div>
          <div class="card-footer">
            <span class="match-reason" title="${reasonText}">${reasonText}</span>
            <button class="card-btn" onclick="openDetailsModal('${item.id}', ${score})">
              Details
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// UI Rendering - Detail Modal
function openDetailsModal(id, score) {
  const item = db.find(x => x.id === id);
  if (!item) return;
  
  const modal = document.getElementById("details-modal");
  const modalBody = document.getElementById("modal-body-content");
  
  const genresHTML = item.genres.map(g => `<span class="card-tag">${g}</span>`).join("");
  const moodsHTML = item.moods.map(m => `<span class="card-tag" style="border-color: var(--accent-pink); color: #f472b6;">${m}</span>`).join("");
  
  // Map values for slider attributes representation
  const paceWords = ["Relaxed", "Slow", "Balanced", "Energetic", "Hyperactive"];
  const compWords = ["Simple", "Casual", "Engaging", "Deep", "Intense"];
  const eraWords = ["Classic Era", "Nostalgic (80s/90s)", "Millennium", "Modern Era", "New Release"];
  
  modalBody.innerHTML = `
    <div class="modal-backdrop">
      <button class="modal-close" onclick="closeDetailsModal()">&times;</button>
      <div class="modal-illustration">${renderIllustration(item.illustration)}</div>
    </div>
    <div class="modal-content">
      <div class="modal-title-row">
        <h2 class="modal-title">${item.title}</h2>
        <span class="match-ring" style="position: static; font-size: 0.85rem;">${score}% Match</span>
      </div>
      <div class="modal-meta">
        <span class="badge">${item.category}</span>
        <span>${eraWords[item.attributes.era - 1]}</span>
      </div>
      
      <p class="modal-description">${item.description}</p>
      
      <div style="margin-bottom: 1rem;">
        <div class="preference-label" style="margin-bottom: 0.25rem;"><span>Genres</span></div>
        <div class="card-tags">${genresHTML}</div>
      </div>
      
      <div style="margin-bottom: 1.25rem;">
        <div class="preference-label" style="margin-bottom: 0.25rem;"><span>Mood / Tone</span></div>
        <div class="card-tags">${moodsHTML}</div>
      </div>
      
      <div class="modal-why-like">
        <strong>Why You'll Love It:</strong>
        <span>${item.whyYouWillLikeIt}</span>
      </div>
      
      <div class="modal-actions">
        <button class="btn-secondary" onclick="closeDetailsModal()">Close Details</button>
        <button class="btn-primary" style="flex: 1.5;" onclick="triggerAction('${item.category}', '${item.title.replace(/'/g, "\\'")}')">
          ${item.category === 'movies' ? 'Watch Trailer' : item.category === 'books' ? 'Read Sample' : 'Play Game'}
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add("active");
}

function closeDetailsModal() {
  const modal = document.getElementById("details-modal");
  modal.classList.remove("active");
}

function triggerAction(category, title) {
  const actionText = category === 'movies' ? 'Streaming trailer for' : category === 'books' ? 'Opening digital preview for' : 'Booting launcher for';
  showToast(`${actionText} "${title}"!`, "emerald");
  closeDetailsModal();
}

// UI Rendering - Similarity Visualizer
function renderVisualizer() {
  const container = document.getElementById("visualizer-items-container");
  const activePrefs = getUserPreferences();
  const recommendations = getRecommendations();
  
  if (recommendations.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📊</div>
        <div class="empty-title">Visualizer Empty</div>
        <div class="empty-desc">No items fit the current filters. Search or filter to visualize similarities.</div>
      </div>
    `;
    return;
  }
  
  // Display detailed comparison for the top 3 matches
  const topMatches = recommendations.slice(0, 3);
  
  container.innerHTML = `
    <div class="visualizer-desc">
      Below is a real-time mathematical breakdown comparing your current <strong>Preference Vector</strong> against the attributes of the top 3 matching items. Jaccard overlaps compute label matching, and Euclidean distance compares slider values.
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      ${topMatches.map(({ item, score, breakdown }) => {
        // Find overlaps
        const genreOverlap = [...activePrefs.genres].filter(g => item.genres.includes(g));
        const moodOverlap = [...activePrefs.moods].filter(m => item.moods.includes(m));
        
        return `
          <div class="viz-card">
            <div class="viz-header">
              <div class="viz-title">${renderIllustration(item.illustration, true)}${item.title} <span class="badge" style="margin-left: 0.5rem; text-transform: uppercase;">${item.category}</span></div>
              <span class="viz-score">${score}% Overlap</span>
            </div>
            
            <div class="viz-bars-container">
              <!-- Overall weighted math -->
              <div class="viz-bar-group">
                <div class="viz-bar-label">
                  <span>Combined Match Weight</span>
                  <span>${score}%</span>
                </div>
                <div class="viz-bar-track">
                  <div class="viz-bar-fill fill-match" style="width: ${score}%;"></div>
                </div>
              </div>
              
              <!-- Genre Jaccard -->
              <div class="viz-bar-group">
                <div class="viz-bar-label">
                  <span>Genre Overlap (Jaccard Index: 40% weight)</span>
                  <span>${breakdown.genreSim}% (${genreOverlap.length} matching tags)</span>
                </div>
                <div class="viz-bar-track">
                  <div class="viz-bar-fill fill-genre" style="width: ${breakdown.genreSim}%;"></div>
                </div>
                <div class="viz-bar-label" style="font-size: 0.65rem; color: var(--text-muted);">
                  Selected: [${[...activePrefs.genres].join(", ")}] | Item: [${item.genres.join(", ")}]
                </div>
              </div>
              
              <!-- Mood Jaccard -->
              <div class="viz-bar-group">
                <div class="viz-bar-label">
                  <span>Mood Affinity (Jaccard Index: 35% weight)</span>
                  <span>${breakdown.moodSim}% (${moodOverlap.length} matching moods)</span>
                </div>
                <div class="viz-bar-track">
                  <div class="viz-bar-fill fill-mood" style="width: ${breakdown.moodSim}%;"></div>
                </div>
                <div class="viz-bar-label" style="font-size: 0.65rem; color: var(--text-muted);">
                  Selected: [${[...activePrefs.moods].join(", ")}] | Item: [${item.moods.join(", ")}]
                </div>
              </div>
              
              <!-- Slider Euclidean -->
              <div class="viz-bar-group">
                <div class="viz-bar-label">
                  <span>Slider Attribute Alignment (Euclidean: 25% weight)</span>
                  <span>${breakdown.attrSim}% Match</span>
                </div>
                <div class="viz-bar-track">
                  <div class="viz-bar-fill fill-slider" style="width: ${breakdown.attrSim}%;"></div>
                </div>
                <div class="viz-bar-label" style="font-size: 0.65rem; color: var(--text-muted);">
                  User: (Pace:${activePrefs.attributes.pace}, Comp:${activePrefs.attributes.complexity}, Era:${activePrefs.attributes.era}) vs 
                  Item: (Pace:${item.attributes.pace}, Comp:${item.attributes.complexity}, Era:${item.attributes.era})
                </div>
              </div>
            </div>
            
            <div style="margin-top: 1rem;">
              <div class="math-card">
Score Formula: Score = 0.40 * Jaccard(Genres) + 0.35 * Jaccard(Moods) + 0.25 * [1 - EuclideanDistance / MaxDistance]
Calculated: 0.40 * (${(breakdown.genreSim / 100).toFixed(2)}) + 0.35 * (${(breakdown.moodSim / 100).toFixed(2)}) + 0.25 * (${(breakdown.attrSim / 100).toFixed(2)}) = ${(score / 100).toFixed(2)}
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// UI Rendering - Database List
function renderDatabaseList() {
  const container = document.getElementById("database-list-container");
  
  // Separate default vs custom items
  const customItems = db.filter(item => item.id.startsWith("custom-"));
  
  let customSectionHTML = "";
  if (customItems.length === 0) {
    customSectionHTML = `
      <div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2rem 0; border: 1px dashed var(--border-light); border-radius: 8px;">
        No custom items added yet. Use the form to insert new ones!
      </div>
    `;
  } else {
    customSectionHTML = customItems.map(item => `
      <div class="db-item-row">
        <div class="db-item-meta">
          <span class="db-item-name">${renderIllustration(item.illustration, true)}${item.title} <span class="badge" style="font-size:0.6rem; padding:0.1rem 0.4rem;">${item.category}</span></span>
          <span class="db-item-desc">${item.description.slice(0, 60)}...</span>
        </div>
        <div class="db-item-actions">
          <button class="action-btn" onclick="handleDeleteItem('${item.id}')" title="Delete custom item">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      </div>
    `).join("");
  }
  
  container.innerHTML = `
    <h3 class="viz-title" style="margin-bottom: 0.75rem;">Custom Database Entries</h3>
    <div class="db-list">
      ${customSectionHTML}
    </div>
    
    <h3 class="viz-title" style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--text-secondary);">Default Library (${DEFAULT_DATABASE.length} items locked)</h3>
    <div class="db-list" style="opacity: 0.75; max-height: 200px;">
      ${DEFAULT_DATABASE.map(item => `
        <div class="db-item-row">
          <div class="db-item-meta">
            <span class="db-item-name">${renderIllustration(item.illustration, true)}${item.title} <span class="badge" style="font-size:0.6rem; padding:0.1rem 0.4rem; background:rgba(255,255,255,0.05); color:var(--text-secondary); border-color:transparent;">${item.category}</span></span>
            <span class="db-item-desc">${item.description.slice(0, 60)}...</span>
          </div>
          <span style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase;">System</span>
        </div>
      `).join("")}
    </div>
  `;
}

// Custom Item Submission Handler
function handleAddCustomItem(event) {
  event.preventDefault();
  
  const title = document.getElementById("db-title").value.trim();
  const category = document.getElementById("db-category").value;
  const genres = document.getElementById("db-genres").value.split(",").map(g => g.trim()).filter(g => g.length > 0);
  const moods = document.getElementById("db-moods").value.split(",").map(m => m.trim()).filter(m => m.length > 0);
  const pace = parseInt(document.getElementById("db-pace").value);
  const complexity = parseInt(document.getElementById("db-complexity").value);
  const era = parseInt(document.getElementById("db-era").value);
  const illustration = document.getElementById("db-illustration").value.trim() || "🔮";
  const description = document.getElementById("db-desc").value.trim();
  const whyYouWillLikeIt = document.getElementById("db-why").value.trim() || "Recommended based on your preferences.";
  
  if (!title || !description) {
    showToast("Please fill in the title and description!", "pink");
    return;
  }
  
  const newItem = {
    id: `custom-${Date.now()}`,
    title,
    category,
    genres,
    moods,
    attributes: { pace, complexity, era },
    illustration,
    description,
    whyYouWillLikeIt
  };
  
  saveCustomItem(newItem);
  showToast(`Added "${title}" to the database!`, "emerald");
  
  // Reset Form
  document.getElementById("add-item-form").reset();
  
  // Refresh rendering
  renderDatabaseList();
  renderRecommendations();
}

function handleDeleteItem(id) {
  const item = db.find(x => x.id === id);
  if (!item) return;
  
  deleteCustomItem(id);
  showToast(`Removed "${item.title}" from local database`, "pink");
  renderDatabaseList();
  renderRecommendations();
}

// Automated Test Runner
function runAutomatedTests() {
  const container = document.getElementById("tests-results-container");
  const results = [];
  
  function test(name, fn) {
    try {
      fn();
      results.push({ name, passed: true, message: "Test passed successfully!" });
    } catch (e) {
      results.push({ name, passed: false, message: e.message || "Assertion failed" });
    }
  }
  
  // 1. Test Jaccard Similarity calculation
  test("Jaccard Similarity math checks", () => {
    const userGenres = new Set(["Sci-Fi", "Action"]);
    const itemGenres1 = ["Sci-Fi", "Action", "Thriller"]; // Intersection = 2, Union = 3 -> 0.67
    const itemGenres2 = ["Drama", "Romance"]; // Intersection = 0, Union = 4 -> 0
    
    const sim1 = calculateJaccardSimilarity(userGenres, itemGenres1);
    const sim2 = calculateJaccardSimilarity(userGenres, itemGenres2);
    
    if (Math.abs(sim1 - 0.666) > 0.01) throw new Error(`Expected similarity ~0.67, got ${sim1}`);
    if (sim2 !== 0.0) throw new Error(`Expected similarity 0.0, got ${sim2}`);
  });
  
  // 2. Test Attribute Vector Distance similarity calculation
  test("Euclidean Distance slider normalization checks", () => {
    const userAttrs = { pace: 3, complexity: 3, era: 3 };
    const itemAttrs1 = { pace: 3, complexity: 3, era: 3 }; // Distance = 0 -> Similarity = 1.0
    const itemAttrs2 = { pace: 1, complexity: 1, era: 1 }; // Distance = sqrt(4+4+4)=sqrt(12)=3.46 -> Sim = 1 - 3.46/6.93 = ~0.5
    
    const sim1 = calculateAttributeSimilarity(userAttrs, itemAttrs1);
    const sim2 = calculateAttributeSimilarity(userAttrs, itemAttrs2);
    
    if (sim1 !== 1.0) throw new Error(`Expected perfect match 1.0, got ${sim1}`);
    if (Math.abs(sim2 - 0.5) > 0.05) throw new Error(`Expected similarity close to 0.50, got ${sim2}`);
  });
  
  // 3. Test empty user preferences doesn't crash the calculation
  test("Empty preferences boundary values", () => {
    const userPrefs = {
      genres: new Set(),
      moods: new Set(),
      attributes: { pace: 3, complexity: 3, era: 3 }
    };
    const testItem = DEFAULT_DATABASE[0];
    
    const calculation = calculateMatchScore(userPrefs, testItem);
    if (isNaN(calculation.score)) throw new Error("Match score resulted in NaN");
    if (calculation.score < 0 || calculation.score > 100) throw new Error(`Score out of range: ${calculation.score}`);
  });
  
  // 4. Test recommendation ranking descending order
  test("Recommendations sorted in descending order", () => {
    const recommendations = getRecommendations();
    if (recommendations.length > 1) {
      for (let i = 0; i < recommendations.length - 1; i++) {
        if (recommendations[i].score < recommendations[i + 1].score) {
          throw new Error(`Out of order at index ${i}: ${recommendations[i].score} vs ${recommendations[i + 1].score}`);
        }
      }
    }
  });

  // 5. Check adding dynamic custom items correctly expands the DB
  test("Database manager custom item injection", () => {
    const initialCount = db.length;
    const dummyId = `custom-test-${Date.now()}`;
    const dummyItem = {
      id: dummyId,
      title: "Test Item Injection",
      category: "movies",
      genres: ["Test"],
      moods: ["Test"],
      attributes: { pace: 3, complexity: 3, era: 3 },
      illustration: "🧪",
      description: "Unit testing sandbox input",
      whyYouWillLikeIt: "Asserts custom write loops"
    };
    
    db.push(dummyItem);
    const updatedCount = db.length;
    
    // Cleanup immediately
    db = db.filter(item => item.id !== dummyId);
    
    if (updatedCount !== initialCount + 1) {
      throw new Error(`Expected DB to expand to ${initialCount + 1}, got ${updatedCount}`);
    }
  });
  
  // Print to UI
  let passedCount = results.filter(r => r.passed).length;
  
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-light); padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem;">
      <span style="font-size: 0.9rem; font-weight: 600;">Status: Completed</span>
      <span class="badge" style="background: ${passedCount === results.length ? 'rgba(16, 185, 129, 0.15)' : 'rgba(236, 72, 153, 0.15)'}; border-color: ${passedCount === results.length ? 'var(--accent-emerald)' : 'var(--accent-pink)'}; color: ${passedCount === results.length ? '#34d399' : '#f472b6'};">
        ${passedCount} / ${results.length} PASSED
      </span>
    </div>
    
    <div class="test-results">
      ${results.map(r => `
        <div class="test-case ${r.passed ? 'pass' : 'fail'}">
          <div class="test-meta">
            <span class="test-name">${r.name}</span>
            <span class="test-message">${r.message}</span>
          </div>
          <span class="test-status ${r.passed ? 'pass' : 'fail'}">${r.passed ? 'PASSED' : 'FAILED'}</span>
        </div>
      `).join("")}
    </div>
  `;
}

// Category change handler
function handleCategoryChange(category) {
  activeCategory = category;
  
  // Update category buttons active state
  document.querySelectorAll(".media-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-category") === category);
  });
  
  // Re-generate genre chips
  renderGenreChips();
  
  // Reset selected active genres (since the category changed)
  selectedGenres.clear();
  
  // Update recommendations list
  renderRecommendations();
}

// Toggle genre selection
function toggleGenre(genre) {
  if (selectedGenres.has(genre)) {
    selectedGenres.delete(genre);
  } else {
    selectedGenres.add(genre);
  }
  
  // Update active states
  document.querySelectorAll(".genre-chip").forEach(chip => {
    if (chip.getAttribute("data-genre") === genre) {
      chip.classList.toggle("active", selectedGenres.has(genre));
    }
  });
  
  renderRecommendations();
  if (document.getElementById("visualizer-content").classList.contains("active")) {
    renderVisualizer();
  }
}

// Toggle mood selection
function toggleMood(mood) {
  if (selectedMoods.has(mood)) {
    selectedMoods.delete(mood);
  } else {
    selectedMoods.add(mood);
  }
  
  // Update active states
  document.querySelectorAll(".mood-chip").forEach(chip => {
    if (chip.getAttribute("data-mood") === mood) {
      chip.classList.toggle("active", selectedMoods.has(mood));
    }
  });
  
  renderRecommendations();
  if (document.getElementById("visualizer-content").classList.contains("active")) {
    renderVisualizer();
  }
}

// Render Genre Chips based on active category
function renderGenreChips() {
  const container = document.getElementById("genre-chips-container");
  const genres = GENRE_MAP[activeCategory] || [];
  
  container.innerHTML = genres.map(g => `
    <span class="chip genre-chip" data-genre="${g}" onclick="toggleGenre('${g}')">${g}</span>
  `).join("");
}

// Render Mood Chips
function renderMoodChips() {
  const container = document.getElementById("mood-chips-container");
  
  container.innerHTML = MOOD_LIST.map(m => `
    <span class="chip mood-chip" data-mood="${m}" onclick="toggleMood('${m}')">${m}</span>
  `).join("");
}

// Setup Event Listeners
function setupEventListeners() {
  // Category selectors
  document.querySelectorAll(".media-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      handleCategoryChange(btn.getAttribute("data-category"));
    });
  });
  
  // Sliders input change triggers recommendations updates
  ["slider-pace", "slider-complexity", "slider-era"].forEach(id => {
    const slider = document.getElementById(id);
    const valueLabel = document.getElementById(`${id}-val`);
    
    // Sliders mappings for reader-friendly labels
    const labelMaps = {
      "slider-pace": ["Chill", "Subtle", "Balanced", "Quick", "Adrenaline"],
      "slider-complexity": ["Very Simple", "Light", "Moderate", "Complex", "Deep/Heavy"],
      "slider-era": ["Retro", "Nostalgic", "Modern Classic", "Recent Era", "State of the Art"]
    };
    
    slider.addEventListener("input", () => {
      const idx = parseInt(slider.value) - 1;
      valueLabel.textContent = labelMaps[id][idx];
      renderRecommendations();
      
      if (document.getElementById("visualizer-content").classList.contains("active")) {
        renderVisualizer();
      }
    });
  });
  
  // Search bar input
  document.getElementById("search-input").addEventListener("input", () => {
    renderRecommendations();
  });
  
  // Tabs buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.getAttribute("data-tab"));
    });
  });
  
  // Form submission
  document.getElementById("add-item-form").addEventListener("submit", handleAddCustomItem);
}

// Initializer on document load
document.addEventListener("DOMContentLoaded", () => {
  loadCustomItems();
  renderGenreChips();
  renderMoodChips();
  setupEventListeners();
  renderRecommendations();
});
