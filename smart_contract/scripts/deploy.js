
const main = async () => {

  const Transation = await hre.ethers.getContractFactory("Transation");
  const transation = await Transation.deploy();

  await transation.deployed();

  console.log(
    `Transaction deployed to`, transation.address
  );
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();