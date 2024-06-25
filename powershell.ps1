# Login to Azure (This will prompt for authentication)
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageaccount"
$skuName = "Standard_LRS" # Standard Locally-Redundant Storage

# Create a Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a Storage Account
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind "StorageV2" # General-purpose v2 account