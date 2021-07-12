export default {
  Query: {
    getWorkspace: async (parent, args, { models }, info) => {
      try {
        let workspace = await models.Workspace.find({})
        return workspace
      } catch (error) {
        console.error("Error : ", error)
      }

    }
  },
  Mutation: {
    addWorkspace: async (parent, args, { models }, info) => {
      try {
        let newWorkspace = new models.Workspace();
        let clientKeys = Object.keys(args.input);
        if (!clientKeys)
          console.log("Error Workspace keys")
        let i = 0;
        while (i < clientKeys.length) {
          if (clientKeys[i] in newWorkspace) {
            newWorkspace[clientKeys[i]] = args.input[clientKeys[i]]
          }
          i++
        }

        newWorkspace = await newWorkspace.save();
        console.log("newWorkspace Created : ", newWorkspace)

        return newWorkspace
      } catch (error) {
        console.error("Error : ", error)
      }

    },
    updateWorkspace: async (parent, args, { models }, info) => {
      try {
        let updateObj = { $set: {} };
        for (var param in args.input) {
          updateObj.$set[param] = args.input[param];
        }
        const resultWorkspace = await models.Workspace.findOneAndUpdate({ _id: args.workspaceID }, updateObj, { new: true });

        console.log("resultWorkspace created : ", resultWorkspace)

        return resultWorkspace
      } catch (error) {
        console.error("Error : ", error)
      }

    },
    deleteWorkspace: async (parent, args, { models }, info) => {
      try {
        args = args.workspaceID;
        const deleteStatus = false;
        let updateObj = { status: deleteStatus }

        let resultWorkspace = await models.Workspace.findOneAndUpdate({ _id: args }, updateObj, { new: true });
        if (resultWorkspace) {
          return resultWorkspace;
        } else {
          console.log("Error Delet Workspace")
        }
        return resultWorkspace

      } catch (error) {
        console.error("Error : ", error)
      }

    },
  }
}