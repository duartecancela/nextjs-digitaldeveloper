---
title: How to access a Linux server through SSH and config key pairs?
date: '2023-04-05'
tags: ['Security', 'System Administration', 'SSH', 'Linux']
draft: false
summary: Step-by-step guide on how to access a Linux server using SSH with key pairs.
image: 'images/flyd-unsplash.jpg'
authors: ['duarte']
---

To access a Linux server with SSH and configure key pairs, follow these steps:

1. **Generate a new key pair** on your local machine (if you don't already have one) using the `ssh-keygen` command. This will create two files:

   - A private key (usually stored in `~/.ssh/id_rsa`)
   - A public key (stored in `~/.ssh/id_rsa.pub`)

2. **Copy the public key to the server** using the `ssh-copy-id` command. This will add your public key to the `authorized_keys` file on the server, allowing you to authenticate using your private key:

   ```bash
   ssh-copy-id user@server_address
   ```

3. If `ssh-copy-id` is not installed on your local machine, you can manually copy the contents of the public key file to the server using an editor or the following command:

   ```bash
   cat ~/.ssh/id_rsa.pub | ssh user@server_address "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
   ```

4. **Secure the private key** on your local machine by setting the correct permissions:

   ```bash
   chmod 600 ~/.ssh/id_rsa
   ```

5. **Connect to the server** using SSH, specifying the private key file with the `-i` option:

   ```bash
   ssh -i ~/.ssh/id_rsa user@server_address
   ```

> If your key file is named something other than `id_rsa`, replace `id_rsa` in the above command with the name of your key file.

That's it! You should now be able to access your Linux server using SSH with key pairs.

_Photo by [FLY:D](https://unsplash.com/@flyd8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/HkTMcmlMOUQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
