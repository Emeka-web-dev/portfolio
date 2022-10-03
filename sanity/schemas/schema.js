// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import pageInfo from "./pageInfo";
import project from "./project";
import skill from "./skill";
import social from "./social";
import experience from "./experience";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo, project, skill, social, experience]),
});
