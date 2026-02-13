---
title: Remote Access
description: VPN onboarding and client setup for reaching the Techtile network from outside the lab.
component: operations
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Scope

This page covers remote VPN access to Techtile from non-local networks.

## When VPN Is Needed

- Use VPN when you are outside the Techtile/Kaho local network.
- If connecting from home, first connect to the Kaho network (for example via Pulse Secure), then connect to Techtile VPN.
- If already on Techtile-WiFi or on the Techtile local network, VPN is usually not required.

## Required Client Package

- A per-device VPN client package is needed.
- The documented flow expects 5 OpenVPN client files for the target device.

## Client Setup (OpenVPN)

1. Install OpenVPN client software (OpenVPN GUI is the documented baseline on Windows).
2. Place the issued client files in the OpenVPN config directory.
3. On Windows, use `C:\Users\<username>\OpenVPN\Config\`.
4. Start OpenVPN GUI and connect from the client UI/system tray.
5. Verify reachability to required Techtile hosts before starting operational tasks.

## Platform Notes

- Compatible OpenVPN clients can be used on macOS, Linux, Android, and iOS.
- Keep VPN files private and do not commit client configuration material to this repository.

## Related Pages

- [Network Backbone](/infrastructure/network/)
- [Tile Management](/operations/tile-management/)
- [Virtual Machines](/operations/virtual-machines/)
