```javascript
// Assuming you're using Mongoose
const User = require('./models/User');

async function updateUser(userId, updates) {
  try {
    const user = await User.findByIdAndUpdate(userId, updates, {
      new: true, // Return the updated document
      runValidators: true, // Validate the updates
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error; // Re-throw the error to be handled by the calling function
  }
}
```