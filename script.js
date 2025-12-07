// Courses Database
const courses = [
    // Programming
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "programming",
        description: "Master HTML, CSS, JavaScript, React, Node.js and become a full-stack developer",
        price: "₹4,999",
        duration: "40 hours",
        students: 15420,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
        instructor: "Rahul Sharma",
        lessons: 120,
        level: "Beginner to Advanced"
    },
    {
        id: 2,
        title: "Python Programming Masterclass",
        category: "programming",
        description: "Learn Python from basics to advanced including Django, Flask, and Data Science",
        price: "₹3,999",
        duration: "35 hours",
        students: 12340,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500",
        instructor: "Priya Singh",
        lessons: 95,
        level: "All Levels"
    },
    {
        id: 3,
        title: "Java Complete Course",
        category: "programming",
        description: "Master Java programming with Spring Boot, Hibernate, and Microservices",
        price: "₹4,499",
        duration: "45 hours",
        students: 9870,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
        instructor: "Amit Kumar",
        lessons: 110,
        level: "Intermediate"
    },
    {
        id: 4,
        title: "Mobile App Development with React Native",
        category: "programming",
        description: "Build iOS and Android apps using React Native and JavaScript",
        price: "₹5,499",
        duration: "38 hours",
        students: 8650,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
        instructor: "Neha Patel",
        lessons: 85,
        level: "Intermediate"
    },
    
    // Design
    {
        id: 5,
        title: "UI/UX Design Complete Course",
        category: "design",
        description: "Learn Figma, Adobe XD, user research, wireframing, and prototyping",
        price: "₹3,499",
        duration: "30 hours",
        students: 11230,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
        instructor: "Sneha Gupta",
        lessons: 75,
        level: "Beginner"
    },
    {
        id: 6,
        title: "Graphic Design Masterclass",
        category: "design",
        description: "Master Photoshop, Illustrator, and InDesign for professional design work",
        price: "₹4,299",
        duration: "42 hours",
        students: 9540,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
        instructor: "Rajesh Verma",
        lessons: 98,
        level: "All Levels"
    },
    {
        id: 7,
        title: "Motion Graphics & Animation",
        category: "design",
        description: "Create stunning animations using After Effects and Premiere Pro",
        price: "₹5,999",
        duration: "36 hours",
        students: 7890,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500",
        instructor: "Kavita Reddy",
        lessons: 82,
        level: "Intermediate"
    },
    
    // Business
    {
        id: 8,
        title: "Digital Marketing Complete Course",
        category: "business",
        description: "Master SEO, SEM, Social Media Marketing, Email Marketing, and Analytics",
        price: "₹3,999",
        duration: "32 hours",
        students: 13450,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        instructor: "Vikram Malhotra",
        lessons: 88,
        level: "Beginner"
    },
    {
        id: 9,
        title: "Business Analytics & Data Science",
        category: "business",
        description: "Learn data analysis, visualization, and business intelligence tools",
        price: "₹4,799",
        duration: "40 hours",
        students: 10230,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
        instructor: "Anjali Mehta",
        lessons: 102,
        level: "Intermediate"
    },
    {
        id: 10,
        title: "Entrepreneurship & Startup Management",
        category: "business",
        description: "Learn how to start, manage, and scale your own business",
        price: "₹2,999",
        duration: "25 hours",
        students: 8760,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500",
        instructor: "Suresh Iyer",
        lessons: 65,
        level: "All Levels"
    },
    
    // Languages
    {
        id: 11,
        title: "English Speaking Course",
        category: "language",
        description: "Improve your English speaking, grammar, and communication skills",
        price: "₹1,999",
        duration: "20 hours",
        students: 18900,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500",
        instructor: "Sarah Johnson",
        lessons: 50,
        level: "All Levels"
    },
    {
        id: 12,
        title: "Spanish for Beginners",
        category: "language",
        description: "Learn Spanish from scratch with interactive lessons and practice",
        price: "₹2,499",
        duration: "28 hours",
        students: 7650,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500",
        instructor: "Maria Garcia",
        lessons: 70,
        level: "Beginner"
    }
];

// Gallery Items
const galleryItems = [
    {
        id: 1,
        title: "Web Development Project",
        type: "images",
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500",
        category: "Project"
    },
    {
        id: 2,
        title: "UI Design Mockup",
        type: "images",
        url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500",
        category: "Design"
    },
    {
        id: 3,
        title: "Mobile App Interface",
        type: "images",
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
        category: "Mobile"
    },
    {
        id: 4,
        title: "Data Visualization",
        type: "images",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
        category: "Analytics"
    },
    {
        id: 5,
        title: "Coding Tutorial",
        type: "videos",
        url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500",
        category: "Tutorial"
    },
    {
        id: 6,
        title: "Design Presentation",
        type: "videos",
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500",
        category: "Presentation"
    },
    {
        id: 7,
        title: "Course Notes PDF",
        type: "documents",
        url: "https://images.unsplash.com/photo-1568667256549-094345857637?w=500",
        category: "Notes"
    },
    {
        id: 8,
        title: "Assignment Template",
        type: "documents",
        url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500",
        category: "Template"
    },
    {
        id: 9,
        title: "Portfolio Website",
        type: "images",
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500",
        category: "Portfolio"
    },
    {
        id: 10,
        title: "E-commerce Design",
        type: "images",
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
        category: "E-commerce"
    },
    {
        id: 11,
        title: "Marketing Campaign",
        type: "images",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        category: "Marketing"
    },
    {
        id: 12,
        title: "Brand Identity",
        type: "images",
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
        category: "Branding"
    }
];

// Storage Files
let storageFiles = [
    {
        id: 1,
        name: "Web Development Notes.pdf",
        type: "pdf",
        size: "2.5 MB",
        date: "2025-01-15",
        icon: "fa-file-pdf"
    },
    {
        id: 2,
        name: "Python Tutorial Video.mp4",
        type: "video",
        size: "125 MB",
        date: "2025-01-14",
        icon: "fa-file-video"
    },
    {
        id: 3,
        name: "UI Design Project.fig",
        type: "design",
        size: "8.3 MB",
        date: "2025-01-13",
        icon: "fa-file-image"
    },
    {
        id: 4,
        name: "Assignment Submission.docx",
        type: "document",
        size: "1.2 MB",
        date: "2025-01-12",
        icon: "fa-file-word"
    },
    {
        id: 5,
        name: "Data Analysis.xlsx",
        type: "spreadsheet",
        size: "3.7 MB",
        date: "2025-01-11",
        icon: "fa-file-excel"
    }
];

// User Data
let userData = {
    name: "Guest User",
    email: "rm2778643@gmail.com",
    phone: "+91 7004398297",
    enrolledCourses: 0,
    uploadedFiles: storageFiles.length,
    completedCourses: 0,
    totalStorage: 100, // GB
    usedStorage: 0.14 // GB
};

// Recent Activities
const recentActivities = [
    {
        title: "Enrolled in Web Development Bootcamp",
        time: "2 hours ago"
    },
    {
        title: "Uploaded Python Tutorial Video",
        time: "5 hours ago"
    },
    {
        title: "Completed UI/UX Design Module 3",
        time: "1 day ago"
    },
    {
        title: "Downloaded Course Materials",
        time: "2 days ago"
    },
    {
        title: "Submitted Assignment",
        time: "3 days ago"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayCourses(courses);
    displayGallery(galleryItems);
    displayStorageFiles();
    updateStorageStats();
    updateProfileStats();
    displayRecentActivities();
    setupFileUpload();
    animateStats();
});

// Show Section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
    
    // Special handling for home
    if (sectionId === 'home') {
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.stats-section').style.display = 'block';
    }
    
    // Update active nav link
    event.target.closest('.nav-link')?.classList.add('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Display Courses
function displayCourses(coursesToShow) {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';
    
    coursesToShow.forEach(course => {
        const courseCard = `
            <div class="course-card" data-category="${course.category}">
                <img src="${course.image}" alt="${course.title}" class="course-image">
                <div class="course-content">
                    <span class="course-category">${course.category.toUpperCase()}</span>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-description">${course.description}</p>
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                        <span><i class="fas fa-users"></i> ${course.students.toLocaleString()}</span>
                        <span><i class="fas fa-star"></i> ${course.rating}</span>
                    </div>
                    <div class="course-footer">
                        <span class="course-price">${course.price}</span>
                        <button class="btn-enroll" onclick="enrollCourse(${course.id})">Enroll Now</button>
                    </div>
                </div>
            </div>
        `;
        coursesGrid.innerHTML += courseCard;
    });
}

// Filter Courses
function filterCourses(category) {
    // Update active button
    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display
    if (category === 'all') {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(c => c.category === category);
        displayCourses(filtered);
    }
}

// Enroll Course
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        userData.enrolledCourses++;
        updateProfileStats();
        showNotification(`Successfully enrolled in ${course.title}!`, 'success');
        
        // Show course details modal
        showCourseDetails(course);
    }
}

// Show Course Details
function showCourseDetails(course) {
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalCourseTitle');
    const content = document.getElementById('modalCourseContent');
    
    title.textContent = course.title;
    content.innerHTML = `
        <img src="${course.image}" alt="${course.title}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
        <p><strong>Category:</strong> ${course.category.toUpperCase()}</p>
        <p><strong>Instructor:</strong> ${course.instructor}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Lessons:</strong> ${course.lessons}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Students Enrolled:</strong> ${course.students.toLocaleString()}</p>
        <p><strong>Rating:</strong> ${course.rating}/5 ⭐</p>
        <p><strong>Price:</strong> ${course.price}</p>
        <br>
        <p><strong>Description:</strong></p>
        <p>${course.description}</p>
        <br>
        <button class="btn-primary" style="width: 100%;">Start Learning</button>
    `;
    
    modal.style.display = 'block';
}

function closeCourseModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Display Gallery
function displayGallery(items) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    items.forEach(item => {
        const galleryItem = `
            <div class="gallery-item" data-type="${item.type}" onclick="viewImage('${item.url}', '${item.title}')">
                <img src="${item.url}" alt="${item.title}" class="gallery-image">
                <div class="gallery-overlay">
                    <h4 class="gallery-title">${item.title}</h4>
                    <p class="gallery-type">${item.type.toUpperCase()}</p>
                </div>
            </div>
        `;
        galleryGrid.innerHTML += galleryItem;
    });
}

// Filter Gallery
function filterGallery(type) {
    // Update active button
    document.querySelectorAll('.gallery-filters .filter-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display
    if (type === 'all') {
        displayGallery(galleryItems);
    } else {
        const filtered = galleryItems.filter(item => item.type === type);
        displayGallery(filtered);
    }
}

// View Image
function viewImage(url, title) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    img.src = url;
    img.alt = title;
    modal.style.display = 'block';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Display Storage Files
function displayStorageFiles() {
    const filesList = document.getElementById('filesList');
    filesList.innerHTML = '';
    
    storageFiles.forEach(file => {
        const fileItem = `
            <div class="file-item">
                <div class="file-info">
                    <div class="file-icon">
                        <i class="fas ${file.icon}"></i>
                    </div>
                    <div class="file-details">
                        <h4>${file.name}</h4>
                        <p class="file-meta">${file.size} • ${file.date}</p>
                    </div>
                </div>
                <div class="file-actions">
                    <button class="btn-icon btn-download" onclick="downloadFile(${file.id})">
                        <i class="fas fa-download"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="deleteFile(${file.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        filesList.innerHTML += fileItem;
    });
}

// Update Storage Stats
function updateStorageStats() {
    const usedGB = userData.usedStorage;
    const totalGB = userData.totalStorage;
    const availableGB = totalGB - usedGB;
    const percentage = (usedGB / totalGB * 100).toFixed(1);
    
    document.getElementById('usedStorage').textContent = `${usedGB.toFixed(2)} GB`;
    document.getElementById('availableStorage').textContent = `${availableGB.toFixed(2)} GB`;
    document.getElementById('storagePercentage').textContent = `${percentage}% Used`;
    document.getElementById('storageProgressFill').style.width = `${percentage}%`;
}

// Download File
function downloadFile(fileId) {
    const file = storageFiles.find(f => f.id === fileId);
    if (file) {
        showNotification(`Downloading ${file.name}...`, 'success');
    }
}

// Delete File
function deleteFile(fileId) {
    if (confirm('Are you sure you want to delete this file?')) {
        storageFiles = storageFiles.filter(f => f.id !== fileId);
        displayStorageFiles();
        userData.uploadedFiles = storageFiles.length;
        updateProfileStats();
        showNotification('File deleted successfully!', 'success');
    }
}

// Setup File Upload
function setupFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'var(--light-color)';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = 'var(--white)';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'var(--white)';
        const files = e.dataTransfer.files;
        handleFiles(files);
    });
    
    // File input change
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

// Handle Files
function handleFiles(files) {
    const uploadedFilesDiv = document.getElementById('uploadedFiles');
    
    Array.from(files).forEach(file => {
        const fileDiv = `
            <div class="uploaded-file">
                <div class="file-info">
                    <i class="fas fa-file"></i>
                    <div>
                        <h4>${file.name}</h4>
                        <p>${(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                </div>
                <button class="btn-primary" onclick="uploadFile('${file.name}', ${file.size})">
                    <i class="fas fa-upload"></i> Upload
                </button>
            </div>
        `;
        uploadedFilesDiv.innerHTML += fileDiv;
    });
}

// Upload File
function uploadFile(fileName, fileSize) {
    // Simulate upload
    showNotification(`Uploading ${fileName}...`, 'success');
    
    setTimeout(() => {
        const newFile = {
            id: storageFiles.length + 1,
            name: fileName,
            type: fileName.split('.').pop(),
            size: `${(fileSize / 1024 / 1024).toFixed(2)} MB`,
            date: new Date().toISOString().split('T')[0],
            icon: 'fa-file'
        };
        
        storageFiles.push(newFile);
        userData.uploadedFiles = storageFiles.length;
        userData.usedStorage += fileSize / 1024 / 1024 / 1024;
        
        displayStorageFiles();
        updateStorageStats();
        updateProfileStats();
        
        showNotification(`${fileName} uploaded successfully!`, 'success');
        document.getElementById('uploadedFiles').innerHTML = '';
    }, 2000);
}

// Update Profile Stats
function updateProfileStats() {
    document.getElementById('enrolledCourses').textContent = userData.enrolledCourses;
    document.getElementById('uploadedFiles').textContent = userData.uploadedFiles;
    document.getElementById('completedCourses').textContent = userData.completedCourses;
}

// Display Recent Activities
function displayRecentActivities() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    
    recentActivities.forEach(activity => {
        const activityItem = `
            <div class="activity-item">
                <h4>${activity.title}</h4>
                <p class="activity-time">${activity.time}</p>
            </div>
        `;
        activityList.innerHTML += activityItem;
    });
}

// Edit Profile
function editProfile() {
    const newName = prompt('Enter your name:', userData.name);
    if (newName) {
        userData.name = newName;
        document.getElementById('userName').textContent = newName;
        showNotification('Profile updated successfully!', 'success');
    }
}

// Animate Stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-card h3');
    stats.forEach(stat => {
        const target = stat.textContent;
        if (target.includes('+')) {
            const num = parseInt(target.replace(/[^0-9]/g, ''));
            animateNumber(stat, 0, num, 2000, '+');
        }
    });
}

function animateNumber(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toLocaleString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString() + suffix;
        }
    }, 16);
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'var(--success-color)' : 'var(--danger-color)';
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modals on outside click
window.onclick = function(event) {
    const courseModal = document.getElementById('courseModal');
    const imageModal = document.getElementById('imageModal');
    
    if (event.target === courseModal) {
        closeCourseModal();
    }
    if (event.target === imageModal) {
        closeImageModal();
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);