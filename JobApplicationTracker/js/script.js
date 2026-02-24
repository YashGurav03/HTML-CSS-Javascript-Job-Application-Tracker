let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let editIndex = -1;

const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const job = {
        company: document.getElementById("company").value,
        role: document.getElementById("role").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    if (editIndex === -1) {
        jobs.push(job);
    } else {
        jobs[editIndex] = job;
        editIndex = -1;
    }

    saveData();
    renderJobs();
    form.reset();
});

function renderJobs() {
    jobList.innerHTML = "";

    let filteredJobs = jobs.filter(job => {
        return (
            (filterSelect.value === "All" || job.status === filterSelect.value) &&
            (job.company.toLowerCase().includes(searchInput.value.toLowerCase()) ||
             job.role.toLowerCase().includes(searchInput.value.toLowerCase()))
        );
    });

    filteredJobs.forEach((job, index) => {
        const div = document.createElement("div");
        div.className = "job-card";
        div.innerHTML = `
            <h3>${job.company}</h3>
            <p><strong>Role:</strong> ${job.role}</p>
            <p><strong>Date:</strong> ${job.date}</p>
            <p>
  <span class="status ${job.status.toLowerCase()}">
    ${job.status}
  </span>
</p>
            <button onclick="editJob(${index})">Edit</button>
            <button onclick="deleteJob(${index})">Delete</button>
        `;
        jobList.appendChild(div);
    });

    updateDashboard();
}

function deleteJob(index) {
    jobs.splice(index, 1);
    saveData();
    renderJobs();
}

function editJob(index) {
    const job = jobs[index];
    document.getElementById("company").value = job.company;
    document.getElementById("role").value = job.role;
    document.getElementById("date").value = job.date;
    document.getElementById("status").value = job.status;
    editIndex = index;
}

function animateValue(id, end, duration = 500) {
    const obj = document.getElementById(id);

    let start = parseInt(obj.textContent) || 0;
    let range = end - start;

    if (range === 0) return; // prevent infinite loop

    let increment = range > 0 ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / Math.abs(range)));

    let current = start;

    const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;

        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function updateDashboard() {
    const total = jobs.length;
    const applied = jobs.filter(j => j.status === "Applied").length;
    const interview = jobs.filter(j => j.status === "Interview").length;
    const offer = jobs.filter(j => j.status === "Offer").length;

    animateValue("total", total);
    animateValue("applied", applied);
    animateValue("interview", interview);
    animateValue("offer", offer);
}

function saveData() {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

searchInput.addEventListener("input", renderJobs);
filterSelect.addEventListener("change", renderJobs);

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

renderJobs();