# Setup Java Environment for CORBA Bank App
# Run this script with: .\setup-java.ps1

Write-Host "Setting up Java environment..." -ForegroundColor Green

# Set JAVA_HOME
$env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

# Verify installation
Write-Host "`nJava version:" -ForegroundColor Cyan
java -version

Write-Host "`nJAVA_HOME: $env:JAVA_HOME" -ForegroundColor Cyan
Write-Host "Java setup complete for this session!" -ForegroundColor Green
Write-Host "`nNote: This is temporary. To make it permanent:" -ForegroundColor Yellow
Write-Host "1. Open System Properties > Environment Variables" -ForegroundColor Yellow
Write-Host "2. Add JAVA_HOME = C:\Program Files\Java\jdk-17" -ForegroundColor Yellow
Write-Host "3. Add %JAVA_HOME%\bin to PATH variable" -ForegroundColor Yellow
