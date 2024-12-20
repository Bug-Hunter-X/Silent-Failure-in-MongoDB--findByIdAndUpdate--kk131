```javascript
// Assuming you're using Mongoose
const User = require('./models/User');

async function updateUser(userId, updates) {
  try {
    const user = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      throw new Error('User not found'); // Explicit error handling
    }

    return user;
  } catch (error) {
    console.error('Error updating user:', error); 
    //Consider more sophisticated error handling here, like throwing a custom error with more context.
    throw error; // Re-throw to allow upper layers to handle
  }
}
```