document.addEventListener('DOMContentLoaded', () => {
    console.log('Ultras Crypto website loaded. The future is now.');

    // --- Card Navigation Logic (No changes needed here) ---
    // Hiding the complex nav logic for clarity, it's the same as before.
    (function() { const nav = document.querySelector('.card-nav'); if (!nav) return; const hamburgerMenu = document.querySelector('.hamburger-menu'); const cards = document.querySelectorAll('.nav-card'); const ease = 'power3.out'; let isExpanded = false; let timeline = null; const calculateHeight = () => { const isMobile = window.matchMedia('(max-width: 768px)').matches; if (isMobile) { const content = nav.querySelector('.card-nav-content'); const topBarHeight = 60; const padding = 16; content.style.visibility = 'visible'; const contentHeight = content.scrollHeight; content.style.visibility = ''; return topBarHeight + contentHeight + padding; } return 260; }; const createTimeline = () => { if (timeline) { timeline.kill(); } gsap.set(nav, { height: 60, overflow: 'hidden' }); gsap.set(cards, { y: 50, opacity: 0 }); const newTimeline = gsap.timeline({ paused: true }); newTimeline.to(nav, { height: calculateHeight, duration: 0.4, ease: ease }).to(cards, { y: 0, opacity: 1, duration: 0.4, ease: ease, stagger: 0.08 }, '-=0.1'); return newTimeline; }; const toggleMenu = () => { if (!timeline) return; isExpanded = !isExpanded; if (isExpanded) { nav.classList.add('open'); hamburgerMenu.classList.add('open'); hamburgerMenu.setAttribute('aria-label', 'Close menu'); timeline.play(); } else { timeline.eventCallback('onReverseComplete', () => { nav.classList.remove('open'); hamburgerMenu.classList.remove('open'); hamburgerMenu.setAttribute('aria-label', 'Open menu'); }); timeline.reverse(); } }; const handleResize = () => { if (!timeline) return; if (isExpanded) { const newHeight = calculateHeight(); gsap.set(nav, { height: newHeight }); timeline = createTimeline(); timeline.progress(1); } else { timeline = createTimeline(); } }; timeline = createTimeline(); hamburgerMenu.addEventListener('click', toggleMenu); window.addEventListener('resize', handleResize); document.querySelectorAll('.nav-card-link').forEach(link => { link.addEventListener('click', () => { if(isExpanded){ toggleMenu(); } }); }); })();

    // ===============================================
    // NEW LOGO LOOP LOGIC
    // - Translated from the React component
    // ===============================================

    // --- 1. EDIT YOUR LOGOS HERE ---
    // Add your partner logos to this array.
    // The 'src' is the path to the image in your 'assets' folder.
    const partnerLogos = [
      { src: "assets/partnets/binance-coin-bnb-seeklogo.png", alt: "Partner 1", href: "https://partner2.com" },
      { src: "assets/partnets/bybit-seeklogo.png", alt: "Partner 2", href: "https://partner2.com" },
      { src: "assets/partnets/bydfi-bityard-seeklogo.png", alt: "Partner 3", href: "https://partner3.com" },
      { src: "assets/partnets/floki-inu-floki-seeklogo.png", alt: "Partner 4", href: "https://partner4.com" },
      { src: "assets/partnets/mexc-seeklogo.png", alt: "Partner 5", href: "https://partner5.com" },
      { src: "assets/partnets/phemex-seeklogo.png", alt: "Partner 6", href: "https://partner6.com" },
      { src: "assets/partnets/trust-wallet-seeklogo.png", alt: "Partner 7", href: "https://partner7.com" },
    ];

    // --- 2. CONFIGURE THE LOOP ---
    const loopConfig = {
        speed: 80,        // Pixels per second
        direction: 'left',  // 'left' or 'right'
        pauseOnHover: true,
        scaleOnHover: true,
        fadeOut: true,
    };



    // ===============================================
// ROTATING TEXT ANIMATION (NEW)
// ===============================================
function initRotatingText() {
    const texts = [
        'YouTube channel about crypto, blockchain, AI, and Web3',
        '1.5 million subscribers strong community',
        'Deep dives into cryptocurrency and decentralized tech',
        'Where the future is discussed, analyzed, and built',
        'Connect with developers, investors, and crypto enthusiasts'
    ];
    
    const config = {
        rotationInterval: 3000, // 3 seconds per text
        staggerDuration: 25, // milliseconds between each character
        staggerFrom: 'last' // Animation direction
    };
    
    const container = document.querySelector('.text-rotate-container');
    if (!container) return;
    
    let currentIndex = 0;
    let animationTimeout;
    
    function splitIntoCharacters(text) {
        return Array.from(text);
    }
    
    function createWordElement(word, wordIndex, totalWords) {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'text-rotate-word';
        
        const characters = splitIntoCharacters(word);
        characters.forEach((char, charIndex) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'text-rotate-element';
            charSpan.textContent = char;
            
            // Calculate stagger delay
            const delay = config.staggerFrom === 'last' 
                ? (characters.length - 1 - charIndex) * config.staggerDuration
                : charIndex * config.staggerDuration;
            
            charSpan.style.animationDelay = `${delay}ms`;
            wordSpan.appendChild(charSpan);
        });
        
        // Add space after word (except last word)
        if (wordIndex < totalWords - 1) {
            const spaceSpan = document.createElement('span');
            spaceSpan.className = 'text-rotate-space';
            spaceSpan.textContent = ' ';
            wordSpan.appendChild(spaceSpan);
        }
        
        return wordSpan;
    }
    
    function displayText(text) {
        // Clear previous content with exit animation
        const previousElements = container.querySelectorAll('.text-rotate-element');
        previousElements.forEach((el, index) => {
            const delay = config.staggerFrom === 'last' 
                ? index * config.staggerDuration
                : (previousElements.length - 1 - index) * config.staggerDuration;
            
            el.style.animationDelay = `${delay}ms`;
            el.classList.add('exit');
        });
        
        // Wait for exit animation to complete
        setTimeout(() => {
            container.innerHTML = '';
            
            // Split text into words and create elements
            const words = text.split(' ');
            words.forEach((word, index) => {
                const wordElement = createWordElement(word, index, words.length);
                container.appendChild(wordElement);
            });
        }, 500); // Match the exit animation duration
    }
    
    function rotateText() {
        displayText(texts[currentIndex]);
        currentIndex = (currentIndex + 1) % texts.length;
        
        animationTimeout = setTimeout(rotateText, config.rotationInterval);
    }
    
    // Start the rotation
    rotateText();
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        if (animationTimeout) clearTimeout(animationTimeout);
    });
}

// Initialize the rotating text
initRotatingText();

    

    // --- 3. THE CODE (No need to edit below this line) ---
    function initLogoLoop(container, logos, config) { if (!container) return; container.innerHTML = ` <div class="logoloop ${config.fadeOut ? 'logoloop--fade' : ''} ${config.scaleOnHover ? 'logoloop--scale-hover' : ''}" role="region" aria-label="Technology partners"> <div class="logoloop__track"></div> </div> `; const track = container.querySelector('.logoloop__track'); const loopInstance = container.querySelector('.logoloop'); const originalList = document.createElement('ul'); originalList.className = 'logoloop__list'; originalList.setAttribute('role', 'list'); logos.forEach(logo => { const item = document.createElement('li'); item.className = 'logoloop__item'; item.setAttribute('role', 'listitem'); const content = `<img src="${logo.src}" alt="${logo.alt}" draggable="false" />`; if (logo.href) { item.innerHTML = `<a class="logoloop__link" href="${logo.href}" target="_blank" rel="noopener noreferrer" aria-label="${logo.alt}">${content}</a>`; } else { item.innerHTML = content; } originalList.appendChild(item); }); track.appendChild(originalList); let seqWidth = 0; let isHovered = false; let offset = 0; let velocity = 0; let lastTimestamp = null; let rafId = null; const targetVelocity = config.direction === 'left' ? config.speed : -config.speed; const updateDimensions = () => { const containerWidth = container.clientWidth; const sequenceWidth = originalList.getBoundingClientRect().width; if (sequenceWidth > 0) { seqWidth = Math.ceil(sequenceWidth); const copiesNeeded = Math.ceil(containerWidth / seqWidth) + 2; track.innerHTML = ''; for (let i = 0; i < copiesNeeded; i++) { const clone = originalList.cloneNode(true); clone.setAttribute('aria-hidden', i > 0); track.appendChild(clone); } } }; const checkImagesLoaded = () => { const images = originalList.querySelectorAll('img'); if (images.length === 0) { updateDimensions(); return; } let loadedCount = 0; images.forEach(img => { if (img.complete) { loadedCount++; } else { img.onload = () => { loadedCount++; if (loadedCount === images.length) updateDimensions(); }; } }); if (loadedCount === images.length) updateDimensions(); }; const animate = (timestamp) => { if (lastTimestamp === null) lastTimestamp = timestamp; const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000; lastTimestamp = timestamp; const target = config.pauseOnHover && isHovered ? 0 : targetVelocity; const easingFactor = 1 - Math.exp(-deltaTime / 0.25); velocity += (target - velocity) * easingFactor; if (seqWidth > 0) { offset += velocity * deltaTime; offset = ((offset % seqWidth) + seqWidth) % seqWidth; track.style.transform = `translate3d(${-offset}px, 0, 0)`; } rafId = requestAnimationFrame(animate); }; if (config.pauseOnHover) { loopInstance.addEventListener('mouseenter', () => isHovered = true); loopInstance.addEventListener('mouseleave', () => isHovered = false); } checkImagesLoaded(); const resizeObserver = new ResizeObserver(updateDimensions); resizeObserver.observe(container); rafId = requestAnimationFrame(animate); }
    const logoLoopContainer = document.getElementById('logo-loop-container');
    initLogoLoop(logoLoopContainer, partnerLogos, loopConfig);


    // ===============================================
    // TEAM PROFILE CARD LOGIC (NEW)
    // ===============================================
    
    function initProfileCard(cardWrapper) {
        // --- CONFIG ---
        const config = {
            enableTilt: true,
            enableMobileTilt: true, // As requested
            mobileTiltSensitivity: 5,
        };

        
        // Don't run if tilt is disabled
        if (!config.enableTilt) return;

        // --- DATA FROM HTML ---
        const { avatarUrl, name, title, handle } = cardWrapper.dataset;
        const status = 'Online';
        const contactText = 'Contact';

        // --- CREATE CARD HTML STRUCTURE ---
// --- CREATE CARD HTML STRUCTURE ---
        cardWrapper.innerHTML = `
            <section class="pc-card">
                <div class="pc-inside">
                    <div class="pc-shine"></div>
                    <div class="pc-glare"></div>
                    <div class="pc-content pc-avatar-content">
                        <img class="avatar" src="${avatarUrl}" alt="${name} avatar" loading="lazy" />
                        <div class="pc-user-info">
                            <div class="pc-user-details">
                                <div class="pc-mini-avatar">
                                    <img src="${avatarUrl}" alt="${name} mini avatar" loading="lazy" />
                                </div>
                                <div class="pc-user-text">
                                    <div class="pc-handle">@${handle}</div>
                                    <div class="pc-status">${status}</div>
                                </div>
                            </div>
                            <button class="pc-contact-btn" type="button" aria-label="Contact ${name}">${contactText}</button>
                        </div>
                    </div>
                    <div class="pc-content">
                        <div class="pc-details">
                            <h3>${name}</h3>
                            <p>${title}</p>
                        </div>
                    </div>
                </div>
            </section>
        `;


        // --- Add contact button click after HTML is created ---
        const contactButton = cardWrapper.querySelector('.pc-contact-btn');
        if (contactButton) {
            contactButton.addEventListener('click', () => {
                const url = cardWrapper.dataset.contactUrl;
                if (url) window.open(url, '_blank');
            });
        }

        const card = cardWrapper.querySelector('.pc-card');
        if (!card) return;

        const ANIMATION_CONFIG = { SMOOTH_DURATION: 600, INITIAL_DURATION: 1500, INITIAL_X_OFFSET: 70, INITIAL_Y_OFFSET: 60, DEVICE_BETA_OFFSET: 20 };
        let rafId = null;

        // --- HELPERS ---
        const clamp = (val, min = 0, max = 100) => Math.min(Math.max(val, min), max);
        const round = (val, p = 3) => parseFloat(val.toFixed(p));
        const adjust = (val, fromMin, fromMax, toMin, toMax) => round(toMin + ((toMax - toMin) * (val - fromMin)) / (fromMax - fromMin));
        const easeInOutCubic = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

        // --- CORE ANIMATION LOGIC ---
        const updateCardTransform = (offsetX, offsetY) => {
            const { clientWidth: width, clientHeight: height } = card;
            const percentX = clamp((100 / width) * offsetX);
            const percentY = clamp((100 / height) * offsetY);
            const centerX = percentX - 50;
            const centerY = percentY - 50;

            const properties = {
                '--pointer-x': `${percentX}%`,
                '--pointer-y': `${percentY}%`,
                '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
                '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
                '--pointer-from-center': `${clamp(Math.hypot(centerY, centerX) / 50, 0, 1)}`,
                '--rotate-x': `${round(-(centerY / 4))}deg`,
                '--rotate-y': `${round(centerX / 5)}deg`
            };
            Object.entries(properties).forEach(([prop, val]) => cardWrapper.style.setProperty(prop, val));
        };

        const createSmoothAnimation = (duration, startX, startY) => {
            const startTime = performance.now();
            const targetX = cardWrapper.clientWidth / 2;
            const targetY = cardWrapper.clientHeight / 2;

            const animationLoop = currentTime => {
                const elapsed = currentTime - startTime;
                const progress = clamp(elapsed / duration);
                const easedProgress = easeInOutCubic(progress);
                updateCardTransform(
                    adjust(easedProgress, 0, 1, startX, targetX),
                    adjust(easedProgress, 0, 1, startY, targetY)
                );
                if (progress < 1) rafId = requestAnimationFrame(animationLoop);
            };
            rafId = requestAnimationFrame(animationLoop);
        };

        const cancelAnimation = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = null;
        };
        
        // --- EVENT HANDLERS ---
        const handlePointerMove = e => {
            const rect = card.getBoundingClientRect();
            updateCardTransform(e.clientX - rect.left, e.clientY - rect.top);
        };
        const handlePointerEnter = () => {
            cancelAnimation();
            cardWrapper.classList.add('active');
            card.classList.add('active');
        };
        const handlePointerLeave = e => {
            createSmoothAnimation(ANIMATION_CONFIG.SMOOTH_DURATION, e.offsetX, e.offsetY);
            cardWrapper.classList.remove('active');
            card.classList.remove('active');
        };

        const handleDeviceOrientation = e => {
            const { beta, gamma } = e;
            if (!beta || !gamma) return;
            updateCardTransform(
                card.clientWidth / 2 + gamma * config.mobileTiltSensitivity,
                card.clientHeight / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * config.mobileTiltSensitivity
            );
        };
        
        const handleClickForPermission = () => {
            if (!config.enableMobileTilt || location.protocol !== 'https:') return;
            if (typeof window.DeviceOrientationEvent.requestPermission === 'function') {
                window.DeviceOrientationEvent.requestPermission()
                    .then(state => {
                        if (state === 'granted') {
                            window.addEventListener('deviceorientation', handleDeviceOrientation);
                             card.removeEventListener('click', handleClickForPermission); // Remove listener after granting
                        }
                    }).catch(console.error);
            } else {
                window.addEventListener('deviceorientation', handleDeviceOrientation);
                card.removeEventListener('click', handleClickForPermission);
            }
        };

        // --- INITIALIZATION ---
        card.addEventListener('pointerenter', handlePointerEnter);
        card.addEventListener('pointermove', handlePointerMove);
        card.addEventListener('pointerleave', handlePointerLeave);
        card.addEventListener('click', handleClickForPermission);

        const initialX = cardWrapper.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
        const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
        updateCardTransform(initialX, initialY);
        createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY);
    }
    
    // Find all card wrappers and initialize them
    const profileCards = document.querySelectorAll('.pc-card-wrapper');
    profileCards.forEach(initProfileCard);

});