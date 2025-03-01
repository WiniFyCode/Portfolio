// Xử lý menu hamburger cho mobile
document.addEventListener('DOMContentLoaded', () => {
    // Kích hoạt section trang chủ khi tải trang
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }

    // Hàm lấy lời chào theo thời gian
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            return '🌅 Chào buổi sáng';
        } else if (hour >= 12 && hour < 18) {
            return '☀️ Chào buổi chiều';
        } else if (hour >= 18 && hour < 22) {
            return '🌆 Chào buổi tối';
        } else {
            return '🌙 Chúc ngủ ngon';
        }
    };

    // Hàm lấy mô tả hero theo thời gian
    const getHeroDescription = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            return `<span class="highlight-text">Front-end Developer</span> với niềm đam mê tạo ra những trải nghiệm web tuyệt vời. 
                    Buổi sáng tràn đầy năng lượng là thời điểm tuyệt vời để <span class="highlight-text">sáng tạo và học hỏi</span>. 
                    Với tinh thần nhiệt huyết của buổi sáng, mình luôn hướng đến việc tạo ra những sản phẩm chất lượng cao.`;
        } else if (hour >= 12 && hour < 18) {
            return `<span class="highlight-text">Front-end Developer</span> với niềm đam mê tạo ra những trải nghiệm web tuyệt vời. 
                    Ánh nắng chiều là nguồn cảm hứng để tạo ra những <span class="highlight-text">giao diện đẹp và thân thiện</span>. 
                    Với sự tập trung cao độ của buổi chiều, mình luôn hướng đến việc tạo ra những sản phẩm hoàn hảo nhất.`;
        } else if (hour >= 18 && hour < 22) {
            return `<span class="highlight-text">Front-end Developer</span> với niềm đam mê tạo ra những trải nghiệm web tuyệt vời. 
                    Không gian tĩnh lặng của buổi tối là lúc để <span class="highlight-text">sáng tạo và thử nghiệm</span>. 
                    Với sự yên bình của buổi tối, mình tập trung vào việc tối ưu và hoàn thiện từng chi tiết.`;
        } else {
            return `<span class="highlight-text">Front-end Developer</span> với niềm đam mê tạo ra những trải nghiệm web tuyệt vời. 
                    Màn đêm tĩnh lặng là thời điểm để <span class="highlight-text">suy ngẫm và lên ý tưởng mới</span>. 
                    Với nguồn cảm hứng từ bầu trời đêm, mình luôn khám phá những công nghệ và xu hướng mới.`;
        }
    };

    // Cập nhật lời chào và mô tả
    const greetingElement = document.querySelector('.greeting');
    const heroDescriptionElement = document.querySelector('.hero-description');

    if (greetingElement) {
        const greeting = getGreeting();
        greetingElement.innerHTML = `<span class="wave">👋</span> ${greeting}, mình là`;
    }

    if (heroDescriptionElement) {
        heroDescriptionElement.innerHTML = getHeroDescription();
    }

    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Tạo overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    body.appendChild(overlay);

    // Toggle menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Đóng menu khi click vào overlay
    overlay.addEventListener('click', () => {
        if (hamburger && navLinks) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });

    // Đóng menu khi click vào links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    });

    // Typing effect
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const words = [
            'Web Developer 💻',
            'UI/UX Designer 🎨',
            'Front-end Developer ⚡',
            'Problem Solver 🔍',
            'Back-end Developer 💻',
            'Full-stack Developer 💻',
            'Mobile Developer 📱',
            'Game Developer 🎮',
            'Tech Enthusiast 💡',
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            typingElement.setAttribute('data-text', typingElement.textContent);

            let typeSpeed = isDeleting ? 100 : 200;

            if (!isDeleting && charIndex === currentWord.length) {
                isWaiting = true;
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            if (charIndex === 0 && !isDeleting) {
                const colors = [
                    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96C93D', '#E056FD'
                ];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                typingElement.style.color = randomColor;
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 1000);
    }

    // Easter Eggs
    const addEasterEggs = () => {
        // Konami Code
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;

        // Matrix Mode
        const activateMatrixMode = () => {
            document.body.style.transition = 'all 1s';
            document.body.style.backgroundColor = '#000';
            const matrixCanvas = document.createElement('canvas');
            matrixCanvas.id = 'matrix-canvas';
            matrixCanvas.style.position = 'fixed';
            matrixCanvas.style.top = '0';
            matrixCanvas.style.left = '0';
            matrixCanvas.style.zIndex = '-1';
            document.body.appendChild(matrixCanvas);

            const matrix = matrixCanvas.getContext('2d');
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;

            const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
            const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const nums = '0123456789';
            const alphabet = katakana + latin + nums;

            const fontSize = 16;
            const columns = matrixCanvas.width/fontSize;

            const rainDrops = [];
            for( let x = 0; x < columns; x++ ) {
                rainDrops[x] = 1;
            }

            const draw = () => {
                matrix.fillStyle = 'rgba(0, 0, 0, 0.05)';
                matrix.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

                matrix.fillStyle = '#0F0';
                matrix.font = fontSize + 'px monospace';

                for(let i = 0; i < rainDrops.length; i++) {
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    matrix.fillText(text, i*fontSize, rainDrops[i]*fontSize);
                    
                    if(rainDrops[i]*fontSize > matrixCanvas.height && Math.random() > 0.975){
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }
            };

            return setInterval(draw, 30);
        };

        // Disco Mode
        const activateDiscoMode = () => {
            // Màu sắc được chọn lọc để tạo hiệu ứng đẹp mắt
            const colors = [
                '#FF6B6B', // Đỏ san hô
                '#4ECDC4', // Xanh ngọc
                '#45B7D1', // Xanh biển
                '#96C93D', // Xanh lá
                '#E056FD', // Tím hồng
                '#F7D794', // Vàng nhạt
                '#786FA6', // Tím xám
                '#F8C291', // Cam đào
                '#63CDDA', // Xanh biển nhạt
                '#CF6A87'  // Hồng đỏ
            ];
            
            const elements = document.querySelectorAll('*');
            let colorIndex = 0;
            
            return setInterval(() => {
                elements.forEach(el => {
                    if (Math.random() > 0.7) { // Giảm tần suất thay đổi màu
                        el.style.transition = 'color 0.8s ease-in-out';
                        el.style.color = colors[Math.floor(Math.random() * colors.length)];
                        
                        // Thêm hiệu ứng glow cho text
                        el.style.textShadow = `0 0 5px ${colors[Math.floor(Math.random() * colors.length)]}`;
                    }
                });
                colorIndex = (colorIndex + 1) % colors.length;
            }, 800); // Tăng thời gian giữa các lần thay đổi
        };

        // Gravity Mode
        const activateGravityMode = () => {
            const elements = document.querySelectorAll('*');
            elements.forEach(el => {
                // Chỉ áp dụng cho các phần tử có nội dung
                if (el.textContent.trim() || el.tagName.toLowerCase() === 'img') {
                    // Thêm transition mượt mà hơn
                    el.style.transition = 'transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    
                    // Random góc nghiêng nhẹ nhàng hơn (-5 đến 5 độ)
                    const randomRotation = Math.random() * 10 - 5;
                    
                    // Thêm hiệu ứng di chuyển lên xuống nhẹ
                    const randomY = Math.random() * 10 - 5;
                    
                    // Áp dụng transform
                    el.style.transform = `rotate(${randomRotation}deg) translateY(${randomY}px)`;
                }
            });
        };

        // Neon Mode
        const activateNeonMode = () => {
            const elements = document.querySelectorAll('*');
            elements.forEach(el => {
                if (el.textContent.trim()) {
                    el.style.transition = 'all 0.5s ease';
                    el.style.textShadow = '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6';
                    el.style.color = '#fff';
                }
            });

            document.body.style.backgroundColor = '#000';
            document.body.style.transition = 'background-color 1s ease';

            return () => {
                elements.forEach(el => {
                    el.style.textShadow = '';
                    el.style.color = '';
                });
                document.body.style.backgroundColor = '';
            };
        };

        // Secret Codes
        let currentMode = null;
        let cleanupFunction = null;
        const secretCodes = {
            'matrix': () => {
                if (cleanupFunction) cleanupFunction();
                if (currentMode) clearInterval(currentMode);
                currentMode = activateMatrixMode();
            },
            'disco': () => {
                if (cleanupFunction) cleanupFunction();
                if (currentMode) clearInterval(currentMode);
                currentMode = activateDiscoMode();
            },
            'gravity': () => {
                if (cleanupFunction) cleanupFunction();
                if (currentMode) clearInterval(currentMode);
                activateGravityMode();
            },
            'neon': () => {
                if (cleanupFunction) cleanupFunction();
                if (currentMode) clearInterval(currentMode);
                cleanupFunction = activateNeonMode();
            },
            'reset': () => {
                if (cleanupFunction) {
                    cleanupFunction();
                    cleanupFunction = null;
                }
                if (currentMode) {
                    clearInterval(currentMode);
                    currentMode = null;
                }
                location.reload();
            }
        };

        let secretInput = '';
        document.addEventListener('keydown', (e) => {
            // Konami Code Check
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    secretCodes.matrix();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }

            // Secret Words Check
            secretInput += e.key.toLowerCase();
            Object.keys(secretCodes).forEach(code => {
                if (secretInput.includes(code)) {
                    secretCodes[code]();
                    secretInput = '';
                }
            });

            // Reset secret input after 2 seconds of no typing
            setTimeout(() => {
                secretInput = '';
            }, 2000);
        });

        // Click Pattern Easter Egg
        let clickPattern = [];
        const targetPattern = [1, 1, 2, 2, 3, 3];
        document.addEventListener('click', (e) => {
            const third = window.innerWidth / 3;
            const clickRegion = Math.ceil(e.clientX / third);
            clickPattern.push(clickRegion);

            if (clickPattern.length > targetPattern.length) {
                clickPattern.shift();
            }

            if (clickPattern.join('') === targetPattern.join('')) {
                secretCodes.disco();
                clickPattern = [];
            }
        });
    };

    // Kích hoạt Easter Eggs
    addEasterEggs();

    // Particles.js
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer && window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#64ffda'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#64ffda',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // 3D Tilt Effect
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.addEventListener('mousemove', (e) => {
            const rect = heroContent.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            const dx = x - xc;
            const dy = y - yc;
            
            const tiltX = dy / yc;
            const tiltY = -(dx / xc);
            
            heroContent.style.transform = `perspective(1000px) rotateX(${tiltX * 10}deg) rotateY(${tiltY * 10}deg) translateZ(20px)`;
        });

        heroContent.addEventListener('mouseleave', () => {
            heroContent.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    }

    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length && tabContents.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Skill Animation
    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });

        skillItems.forEach(item => {
            if (item) {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                observer.observe(item);
            }
        });
    }

    // Easter Eggs Modal
    const easterEggBtn = document.getElementById('easter-egg-btn');
    const easterEggsModal = document.getElementById('easter-eggs-modal');
    const closeEasterEggs = document.getElementById('close-easter-eggs');

    if (easterEggBtn && easterEggsModal && closeEasterEggs) {
        easterEggBtn.addEventListener('click', () => {
            easterEggsModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeEasterEggs.addEventListener('click', () => {
            easterEggsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === easterEggsModal) {
                easterEggsModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Highlight các khu vực click khi hover
    const clickAreas = document.querySelectorAll('.click-area');
    clickAreas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            area.style.background = 'rgba(100, 255, 218, 0.2)';
        });
        area.addEventListener('mouseleave', () => {
            area.style.background = 'rgba(100, 255, 218, 0.1)';
        });
    });

    // Khởi tạo Game Tips
    initGameTips();

    // Cập nhật thanh tiến trình cuộn
    updateScrollProgress();
});

// Smooth scroll cho các anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        // Kiểm tra nếu href chỉ là "#" thì bỏ qua
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Lấy nút submit và thêm loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        submitBtn.disabled = true;

        try {
            const formData = {
                name: this.name.value,
                email: this.email.value,
                subject: this.subject.value,
                message: this.message.value
            };

            const response = await fetch('http://localhost:5000/api/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                // Hiển thị thông báo thành công
                alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
                contactForm.reset();
            } else {
                // Hiển thị thông báo lỗi
                alert('Có lỗi xảy ra: ' + data.message);
            }
        } catch (error) {
            console.error('Lỗi:', error);
            alert('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau!');
        } finally {
            // Khôi phục nút submit
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Animation khi scroll
window.addEventListener('scroll', () => {
    // Cập nhật thanh tiến trình cuộn
    updateScrollProgress();

    // Code xử lý animation sections hiện tại
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 2)) {
            section.classList.add('active');
        }
    });
});

// Hàm cập nhật thanh tiến trình cuộn
const updateScrollProgress = () => {
    const scrollProgress = document.getElementById('scrollProgressBar');
    if (scrollProgress) {
        // Tính toán phần trăm đã cuộn
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        // Cập nhật chiều rộng của thanh tiến trình
        scrollProgress.style.width = `${scrolled}%`;
        
        // Thêm hiệu ứng mờ khi không cuộn
        if (scrolled === 0) {
            scrollProgress.style.opacity = '0';
        } else {
            scrollProgress.style.opacity = '1';
        }
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const viewDetailsBtns = document.querySelectorAll('.view-details');

    // Mở modal và hiển thị chi tiết dự án tương ứng
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.dataset.project;
            showProjectDetails(projectId);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Đóng modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // Đóng modal khi click bên ngoài
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Hiển thị chi tiết dự án
    function showProjectDetails(projectId) {
        const allDetails = document.querySelectorAll('.project-details');
        allDetails.forEach(detail => detail.style.display = 'none');
        
        const currentDetail = document.getElementById(`${projectId}-details`);
        if (currentDetail) {
            currentDetail.style.display = 'block';
        }
    }
});

// Khởi tạo Game Tips
const initGameTips = () => {
    const tips = [
        {
            text: "Bạn có biết? Hãy chuyển bàn phím sang tiếng Anh (Ctrl + Shift) và nhấn <span class='highlight'>↑↑↓↓←→←→BA</span> để kích hoạt chế độ Matrix!",
            duration: 10000
        },
        {
            text: "Chuyển bàn phím sang tiếng Anh và gõ từ khóa <span class='highlight'>disco</span> để biến trang web thành sàn nhảy!",
            duration: 8000
        },
        {
            text: "Chuyển bàn phím sang tiếng Anh và gõ từ khóa <span class='highlight'>gravity</span> để khám phá hiệu ứng trọng lực",
            duration: 8000
        },
        {
            text: "Chuyển bàn phím sang tiếng Anh và gõ từ khóa <span class='highlight'>neon</span> để tạo hiệu ứng đèn neon lung linh",
            duration: 8000
        },
        {
            text: "Click theo mẫu: <span class='highlight'>Bên trái màn hình - Bên trái - Giữa - Giữa - Phải - Phải</span> để kích hoạt Disco Mode",
            duration: 10000
        },
        {
            text: "Chuyển bàn phím sang tiếng Anh và gõ <span class='highlight'>reset</span> để trở về trạng thái bình thường",
            duration: 8000
        }
    ];

    const gameTips = document.getElementById('game-tips');
    const tipContent = gameTips.querySelector('.tip-content');
    const nextTipBtn = document.getElementById('next-tip');
    
    let currentTipIndex = 0;
    let tipTimeout;
    let isVisible = false;

    // Hiển thị tip mới
    const showNewTip = () => {
        const tip = tips[currentTipIndex];
        
        // Ẩn tip cũ
        tipContent.classList.remove('show');
        
        // Cập nhật nội dung sau animation
        setTimeout(() => {
            tipContent.innerHTML = tip.text;
            tipContent.classList.add('show');
            gameTips.classList.add('show', 'new-tip');
            
            // Tự động ẩn tip sau một khoảng thời gian
            clearTimeout(tipTimeout);
            tipTimeout = setTimeout(() => {
                if (isVisible) {
                    hideGameTips();
                }
            }, tip.duration);
        }, 300);

        currentTipIndex = (currentTipIndex + 1) % tips.length;
        isVisible = true;
    };

    // Ẩn game tips
    const hideGameTips = () => {
        gameTips.classList.remove('show', 'new-tip');
        setTimeout(() => {
            tipContent.classList.remove('show');
        }, 300);
        isVisible = false;
    };

    // Xử lý sự kiện click nút next
    nextTipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNewTip();
    });

    // Hiển thị tip đầu tiên sau 5 giây
    setTimeout(showNewTip, 5000);

    // Hiển thị tip mới mỗi 30 giây nếu không có tương tác
    setInterval(() => {
        if (!isVisible) {
            showNewTip();
        }
    }, 30000);
}; 