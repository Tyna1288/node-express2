# Bugs


- Bug #1: Login route should await User.authenticate.

- Bug #2: Users ought to Patch themselves.

- Bug #3: Users should not be able to Patch Username/Admin/Other Fields.

- Bug #4: Listing route should not return all fields.

- Bug #5: Deletion should always reports success.

- Bug #6: In middleware, the auth function decode JWT and not verify it.
