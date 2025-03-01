// Xử lý menu hamburger cho mobile
document.addEventListener('DOMContentLoaded', () => {
    // Kích hoạt section trang chủ khi tải trang
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
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
            'Problem Solver 🔍'
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
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Thêm xử lý gửi form ở đây
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
    });
}

// Animation khi scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 2)) {
            section.classList.add('active');
        }
    });
});

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