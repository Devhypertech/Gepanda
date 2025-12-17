module.exports = {
  apps: [
    {
      name: "gepanda",
      cwd: "/var/www/Gepanda",
      script: "npm",
      args: "run start -- --port 3200",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3200,
      },
      error_file: "/root/.pm2/logs/gepanda-error.log",
      out_file: "/root/.pm2/logs/gepanda-out.log",
      time: true,
    },
  ],
};
