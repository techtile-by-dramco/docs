---
title: Virtual Machines
description: VM inventory, access patterns, and maintenance notes for Techtile operations.
component: operations
status: reviewed
last_verified: 2026-02-13
sensitivity: internal
---

## Purpose

Central operational notes for virtual machines used in the Techtile infrastructure stack.

## VM Inventory Template

Use this table as the maintained source in docs.

| VM Name | Role | Host/Cluster | IPv4 | Access Method | Related Docs | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `TBD` | `TBD` | `TBD` | `TBD` | `TBD` | [Network](/infrastructure/network/) | Fill with live values |

## Operational Checks

1. Verify VM reachability from the management network.
2. Confirm time sync before running DAQ or timing-sensitive services.
3. Confirm service health (processes, storage mount, and expected ports).
4. Record config drift and update this page with `last_verified`.

## Cross-References

- [Network Backbone](/infrastructure/network/)
- [Time & Synchronization](/infrastructure/time/)
- [Remote Access](/operations/remote-access/)
