// AI Cat Video Generator - Main Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initThemeToggle();
    loadTools();
    loadTemplates();
    initScriptGenerator();
    initRandomTemplate();
    initSmoothScroll();
});

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Load AI Tools
function loadTools() {
    const toolsGrid = document.getElementById('tools-grid');
    
    if (!toolsGrid || !window.aiTools) return;
    
    toolsGrid.innerHTML = window.aiTools.map(tool => `
        <div class="tool-card" style="animation: fadeInUp 0.5s ease ${tool.id * 0.1}s both;">
            <div class="tool-icon" style="background: ${tool.color}">
                ${tool.icon}
            </div>
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-features">
                ${tool.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
            <div class="tool-price">
                <i class="fas fa-tag"></i> ${tool.price}
            </div>
            <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="btn btn-small">
                <i class="fas fa-external-link-alt"></i> زر الموقع
            </a>
        </div>
    `).join('');
}

// Load Templates
function loadTemplates() {
    const templatesGrid = document.getElementById('templates-grid');
    
    if (!templatesGrid || !window.catVideoTemplates) return;
    
    templatesGrid.innerHTML = window.catVideoTemplates.slice(0, 8).map(template => `
        <div class="template-card" onclick="showTemplateDetails(${template.id})">
            <div class="template-icon">${template.emoji}</div>
            <h3>${template.title}</h3>
            <p>${template.description}</p>
            <div class="template-tags">
                ${template.tags.map(tag => `<span class="template-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Show Template Details
function showTemplateDetails(id) {
    const template = window.catVideoTemplates.find(t => t.id === id);
    if (!template) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'template-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.closest('.template-modal').remove()">&times;</span>
            <div class="modal-icon">${template.emoji}</div>
            <h2>${template.title}</h2>
            <p>${template.description}</p>
            
            <div class="modal-section">
                <h3>📝 Prompt للذكاء الاصطناعي:</h3>
                <div class="prompt-box">
                    <code>${template.prompt}</code>
                    <button class="copy-btn" onclick="copyPrompt('${template.prompt.replace(/'/g, "\\'")}')">
                        <i class="fas fa-copy"></i> نسخ
                    </button>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>🏷️ الوسوم:</h3>
                <div class="template-tags">
                    ${template.tags.map(tag => `<span class="template-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .template-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            background: #1a1a2e;
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            position: relative;
            animation: slideUp 0.3s ease;
        }
        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            color: #ff6b9d;
        }
        .modal-icon {
            font-size: 4rem;
            text-align: center;
            margin-bottom: 20px;
        }
        .modal-content h2 {
            text-align: center;
            color: #ff6b9d;
            margin-bottom: 15px;
        }
        .modal-content > p {
            text-align: center;
            color: #b8b8d1;
            margin-bottom: 25px;
        }
        .modal-section {
            margin-bottom: 20px;
        }
        .modal-section h3 {
            color: #ffd93d;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }
        .prompt-box {
            background: #0f0f1a;
            padding: 15px;
            border-radius: 10px;
            position: relative;
        }
        .prompt-box code {
            color: #b8b8d1;
            font-size: 0.9rem;
            word-break: break-all;
        }
        .copy-btn {
            position: absolute;
            top: 10px;
            left: 10px;
            background: #ff6b9d;
            border: none;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
        }
        .copy-btn:hover {
            background: #c44569;
        }
        .template-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(modal);
}

// Copy Prompt
function copyPrompt(prompt) {
    navigator.clipboard.writeText(prompt).then(() => {
        alert('تم نسخ الـ Prompt بنجاح! 🎉');
    });
}

// Script Generator
function initScriptGenerator() {
    const generateBtn = document.getElementById('generate-script');
    const copyBtn = document.getElementById('copy-script');
    const output = document.getElementById('script-output');
    
    if (!generateBtn) return;
    
    let currentScript = '';
    
    generateBtn.addEventListener('click', function() {
        const type = document.getElementById('video-type').value;
        const duration = document.getElementById('video-duration').value;
        
        // Get random script template
        const templates = window.scriptTemplates[type];
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        
        // Get random trending topic
        const randomTopic = window.trendingTopics[Math.floor(Math.random() * window.trendingTopics.length)];
        
        // Generate full script
        currentScript = generateFullScript(randomTemplate, randomTopic, duration);
        
        // Display with animation
        output.innerHTML = `<p>${currentScript}</p>`;
        output.style.animation = 'none';
        output.offsetHeight; // Trigger reflow
        output.style.animation = 'fadeIn 0.5s ease';
    });
    
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (currentScript) {
                navigator.clipboard.writeText(currentScript).then(() => {
                    alert('تم نسخ السيناريو بنجاح! 📝');
                });
            }
        });
    }
}

// Generate Full Script
function generateFullScript(opening, topic, duration) {
    const scripts = {
        15: `
🎬 ${opening}

🐱 ${topic}

✨ #قط #يوتيوب_شورت #ترند #ذكاء_اصطناعي
        `,
        30: `
🎬 ${opening}

🐱 اليوم سنتحدث عن ${topic}

[مقطع الفيديو]

😺 كانت هذه لحظة رائعة!

لا تنسوا الإعجاب والت订阅!

✨ #قط #يوتيوب_شورت #ترند #مضحك #لطيف
        `,
        60: `
🎬 ${opening}

🐱 مرحباً جميعاً! 

اليوم سنتحدث عن ${topic} وهو من أكثر المواضيع ترنداً حالياً!

[مقطع الفيديو 1]

😺 انظروا إلى ردة فعل القط!

[مقطع الفيديو 2]

💡 هل تعلمون أن القطط يمكنها القفز حتى 6 أضعاف طولها؟

[مقطع الفيديو 3]

😍 هذه اللحظة لطيفة جداً!

إذا أعجبكم الفيديو، لا تنسوا:
- 👍 الإعجاب
- 📤 المشاركة  
- 🔔 الاشتراك

وتفاعلوا معنا في التعليقات! 💬

✨ #قط #يوتيوب_شورت #ترند #ذكاء_اصطناعي #قطط #حيوانات_أليفة
        `
    };
    
    return scripts[duration];
}

// Random Template Button
function initRandomTemplate() {
    const randomBtn = document.getElementById('random-template');
    
    if (!randomBtn) return;
    
    randomBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * window.catVideoTemplates.length);
        const randomTemplate = window.catVideoTemplates[randomIndex];
        
        // Show alert with template
        alert(`🎲 فكرة عشوائية:\n\n${randomTemplate.emoji} ${randomTemplate.title}\n\n${randomTemplate.description}\n\n📝 Prompt:\n${randomTemplate.prompt}`);
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

