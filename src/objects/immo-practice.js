/*
in this challenge, you are given a few functions simulating API endpoints.
Your task is to use them to write a function that retrieves a list of investable properties.
Any property belonging to an investable region or belonging to an investable region’s
descendant in the tree of regions is considered investable.

You can use the displayResults(data) helper as a sample callback.
*/
const getAllRegions = () => {
  return [
    {
      name: "london",
      parent: "UK",
    },
    {},
  ];
};

// regions = "london,bermuda,glasgow"
const getPropertiesByRegion = (regions) => {
  return [{ region: "", address: {} }];
};

const getInvestableRegions = ["london"];

function getInvestableProperties(top_level_region) {
  async function getResult() {
    const parent_region_map = await createParentMap();

    let final_regions = "";
    const all_investable_regions =
      await getAllInvestableRegions(parent_region_map);

    const combined_regions = await findDescendants(
      top_level_region,
      parent_region_map,
    );

    all_investable_regions.forEach((region) => {
      if (combined_regions.hasOwnProperty(region)) {
        final_regions = final_regions ? final_regions + "," + region : region;
      }
    });

    const properties = await getPropertiesByRegion(final_regions);
    const b = new Date() - a;
    console.log("time to execute: ", b);

    return properties;
  }
  return getResult();
}

async function createParentMap() {
  const pMap = new Map();
  const allRegions = await getAllRegions();
  allRegions.regions.forEach((region) => {
    const ob = { [region.name]: true };
    if (pMap.get(region.parent)) {
      pMap.set(region.parent, { ...pMap.get(region.parent), ...ob });
    } else {
      pMap.set(region.parent, { ...ob });
    }
  });
  return pMap;
}

async function findDescendants(parent_region, pMap) {
  let result = { [parent_region]: true };
  //  const allRegions = await getAllRegions()
  backtrack(parent_region);
  function backtrack(r) {
    const children = pMap.get(r);
    if (children) {
      result = { ...result, ...children };
      for (const c in children) {
        backtrack(c);
      }
    }
  }
  return result;
}

async function getAllInvestableRegions(pMap) {
  const investable_regions = await getInvestableRegions();
  const result = [];

  for (const i of investable_regions.regions) {
    const child_regions = await findDescendants(i, pMap);
    result.push(...Object.keys(child_regions));
  }
  return result;
}
