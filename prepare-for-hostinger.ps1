# PowerShell script to prepare files for Hostinger upload
# Run this script: .\prepare-for-hostinger.ps1

Write-Host "🚀 Preparing Family Ties Barbershop for Hostinger deployment..." -ForegroundColor Cyan
Write-Host ""

# Create deployment folder
$deployFolder = "hostinger-upload"
Write-Host "📁 Creating deployment folder: $deployFolder" -ForegroundColor Yellow

if (Test-Path $deployFolder) {
    Write-Host "   Removing old deployment folder..." -ForegroundColor Gray
    Remove-Item -Path $deployFolder -Recurse -Force
}

New-Item -ItemType Directory -Path $deployFolder | Out-Null

# Copy necessary files and folders
Write-Host ""
Write-Host "📦 Copying files..." -ForegroundColor Yellow

# Copy .next folder (production build)
Write-Host "   ✓ Copying .next/ (production build)" -ForegroundColor Green
Copy-Item -Path ".next" -Destination "$deployFolder\.next" -Recurse

# Copy public folder (static assets)
Write-Host "   ✓ Copying public/ (images and assets)" -ForegroundColor Green
Copy-Item -Path "public" -Destination "$deployFolder\public" -Recurse

# Copy configuration files
Write-Host "   ✓ Copying package.json" -ForegroundColor Green
Copy-Item -Path "package.json" -Destination "$deployFolder\package.json"

Write-Host "   ✓ Copying package-lock.json" -ForegroundColor Green
Copy-Item -Path "package-lock.json" -Destination "$deployFolder\package-lock.json"

Write-Host "   ✓ Copying next.config.ts" -ForegroundColor Green
Copy-Item -Path "next.config.ts" -Destination "$deployFolder\next.config.ts"

# Optional: Copy node_modules (comment out if you'll run npm install on server)
# Write-Host "   ⏳ Copying node_modules/ (this may take a while)..." -ForegroundColor Yellow
# Copy-Item -Path "node_modules" -Destination "$deployFolder\node_modules" -Recurse
# Write-Host "   ✓ node_modules copied" -ForegroundColor Green

Write-Host ""
Write-Host "✅ Deployment package ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📂 Files are in the '$deployFolder' folder" -ForegroundColor Cyan
Write-Host ""
Write-Host "📤 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Upload everything in '$deployFolder' to your Hostinger public_html folder" -ForegroundColor White
Write-Host "   2. SSH into Hostinger and run: npm install --production" -ForegroundColor White
Write-Host "   3. Start the server: npm start" -ForegroundColor White
Write-Host ""
Write-Host "📖 For detailed instructions, see UPLOAD_TO_HOSTINGER.md" -ForegroundColor Cyan
Write-Host ""

# Calculate folder size
$size = (Get-ChildItem -Path $deployFolder -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "📊 Total size: $([math]::Round($size, 2)) MB" -ForegroundColor Gray
Write-Host ""

